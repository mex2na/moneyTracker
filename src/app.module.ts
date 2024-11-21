import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

import "dotenv/config"

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // Les variables seront accessibles globalement
  }),

  TypeOrmModule.forRoot({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true
  }), TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
