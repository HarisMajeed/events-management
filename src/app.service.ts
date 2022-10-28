import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject()
    private readonly name:string,
    @Inject()
    private readonly message:string
  ){}
  getHello(): string {
    return `Hello World! ${this.name}, ${this.message}`;
  }
}
