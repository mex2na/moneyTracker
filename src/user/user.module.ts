<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
=======
import { Module, forwardRef } from '@nestjs/common';
>>>>>>> 386373e012dfecb11fe608a011d9726773248c6b
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';  // Importer l'entité User
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { RevenuModule } from '../revenu/revenu.module';  
import { Revenu } from 'src/revenu/entities/revenu.entity';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
=======
  imports: [
    TypeOrmModule.forFeature([User, Revenu]),  
    forwardRef(() => RevenuModule),  
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],  
>>>>>>> 386373e012dfecb11fe608a011d9726773248c6b
})
export class UsersModule {}
