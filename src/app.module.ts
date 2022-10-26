import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { EventsController } from './events.controller';

@Module({
  imports: [ AuthModule, UserModule, BookmarksModule],
  controllers:[EventsController] 
})
export class AppModule {}
