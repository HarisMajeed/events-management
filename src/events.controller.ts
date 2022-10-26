import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller('/events') 
export class EventsController {
    @Get()  
    findAll(){}
    @Get(':id')
    findOne(@Param('id') id:string) {
        return id;
    }
    @Post()
     create(@Body() input:object) {
        return input;
     }
    @Patch(':id') 
     update(@Param('id') id:string, @Body() input:object) {
        return {id,input};
     }
    @Delete(':id')
     remove(@Param('id') id:string) {
        return id;
     }
}