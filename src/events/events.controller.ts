import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateEventDto } from './create.events.dto';
import { Events } from './event.entity';
import { UpdateEventDto } from './update.event.dto';

@Controller('/events')
export class EventsController {
  constructor(
    @InjectRepository(Events)
    private readonly repository: Repository<Events>,
  ) {}

  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get('/practice')
  async practice() {
    return await this.repository.find({
      where: { id: MoreThanOrEqual(3) },
    });
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id:number) {
    return await this.repository.findOne({ where: { id: id } });
  }

  @Post()
  async create(@Body(ValidationPipe) input: CreateEventDto) {
    const event = {
      ...input,
      when: new Date(input.when),
    };
    return await this.repository.save(event);
  }

  @Patch(':id')
  async update(@Param('id') id: any, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOne({
      where: { id: parseInt(id) },
    });
    return await this.repository.save({
      ...event,
      ...input,
      when: input.when ? new Date(input.when) : event?.when,
    });
  }

  /**
   * @param id
   * to delete specific record
   * httpCode 204 indecates no content.
   */
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: any) {
    const event: any = await this.repository.findOne({
      where: { id: parseInt(id) },
    });
    return await this.repository.remove(event);
  }
}
