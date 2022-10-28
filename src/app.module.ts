import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from './events/event.entity';
import { EventsModule } from './events/events.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { JapanService } from './app.japan.service';
import { AppDummy } from './app.dummy';
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config .prod';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig,ormConfigProd],
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV === 'production' ? ormConfigProd : ormConfig,
    }),
    AuthModule,
    UserModule,
    BookmarksModule,
    EventsModule,
  ],
  providers: [
    {
      provide: AppService,
      useClass: JapanService,
    },
    { provide: 'APP_NAME', useValue: 'Nest Events Backend!' },
    {
      provide: 'MESSAGE',
      inject: [AppDummy],
      useFactory: (app) => `${app.getDummyText()} Factory`,
    },
    AppDummy,
  ],
  controllers: [AppController],
})
export class AppModule {}
