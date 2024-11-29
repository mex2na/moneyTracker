import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';  // Importer l'entité User
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { RevenuModule } from '../revenu/revenu.module';
import { Revenu } from 'src/revenu/entities/revenu.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Revenu]),
    forwardRef(() => RevenuModule),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule { }
