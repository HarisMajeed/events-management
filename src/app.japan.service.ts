import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class JapanService {
  constructor(
    @Inject('APP_NAME') 
    private readonly name: string,
    @Inject('MESSAGE')
    private readonly message:string
  ) {}
  getHello(): String {
    return `こんにちは言葉 this is ${this.name}, ${this.message}`;
  }
}
