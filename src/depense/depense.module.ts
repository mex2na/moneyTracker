import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Depense, User])
  ],
  controllers: [DepenseController],
  providers: [DepenseService],
})
export class DepenseModule { }
