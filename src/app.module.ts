import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from './events/event.entity';
import { EventsModule } from './events/events.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'127.0.0.1',
    port:3306,
    username:'root',
    password:'example',
    database:'nest-event',
    entities:[Events],
    synchronize:false
  }),AuthModule, UserModule, BookmarksModule, EventsModule]
})
export class AppModule {}
