import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';
import { User } from 'src/user/entities/user.entity';
import { CompteService } from 'src/compte/compte.service';
import { Compte } from 'src/compte/entities/compte.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Depense, Compte])
  ],
  controllers: [DepenseController],
  providers: [DepenseService, CompteService],
})
export class DepenseModule { }
