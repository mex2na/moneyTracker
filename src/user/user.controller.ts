<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException, UseGuards } from '@nestjs/common';
=======
import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
>>>>>>> 386373e012dfecb11fe608a011d9726773248c6b
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/jwt-auth.guard';

@Controller('/users')
<<<<<<< HEAD
// @UseGuards(JwtAuthGuard)
export class UserController {
=======
@UseGuards(JwtAuthGuard)
export class UsersController {
>>>>>>> 386373e012dfecb11fe608a011d9726773248c6b
  constructor(
    private readonly usersService: UsersService,
  ) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response): Promise<void> {
    const saltRounds = 10;   
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);
    const user: User = {
      name: createUserDto.name,
      email: createUserDto.email,
      password: hashedPassword,
      id: 0,
      revenus: []
    };
    try {
      const response = await this.usersService.create(user);
      res.status(200).json({
        status: true,
        data: response
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        data: error,
      });
    }
  }

  @Get(':userId/revenu/:revenuId')
  async getUserIdByRevenuId(
    @Param('userId') userId: number,  
    @Param('revenuId') revenuId: number,  
    @Res() res: Response,
  ): Promise<void> {
    try {
      const response = await this.usersService.getUserIdByRevenuId(userId, revenuId);
      res.status(200).json({
        status: true,
        data: response
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        data: error,
      });
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
