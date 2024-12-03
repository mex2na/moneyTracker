import { Module } from '@nestjs/common';
import { CompteService } from './compte.service';
import { CompteController } from './compte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte } from './entities/compte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compte])],
  controllers: [CompteController],
  providers: [CompteService],
  exports: [CompteService]
})
export class CompteModule { }
