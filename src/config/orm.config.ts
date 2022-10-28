import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Attendee } from "src/events/attendee.entity";
import { Events } from "src/events/event.entity";

export default ():TypeOrmModuleOptions=> ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Events,Attendee],
    synchronize: true,
  });