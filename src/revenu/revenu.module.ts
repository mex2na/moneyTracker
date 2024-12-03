import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenuService } from './revenu.service';
import { RevenuController } from './revenu.controller';
import { Revenu } from './entities/revenu.entity';
import { User } from '../user/entities/user.entity';
import { Compte } from 'src/compte/entities/compte.entity';
import { CompteService } from 'src/compte/compte.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Revenu, Compte]),
  ],
  controllers: [RevenuController],
  providers: [RevenuService, CompteService],
  exports: [RevenuService]
})
export class RevenuModule { }
