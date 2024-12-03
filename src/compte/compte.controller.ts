import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { CompteService } from './compte.service';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import { Response } from 'express';

@Controller('compte')
export class CompteController {
  constructor(private readonly compteService: CompteService) { }

  @Post()
  async create(@Body() createCompteDto: CreateCompteDto, @Res() res: Response) {

    try {

      const data = await this.compteService.create(createCompteDto)

      res.status(200).json({
        status: true,
        data
      })

    } catch (err) {
      res.status(501).json({
        status: false,
        err
      })
    }



  }

  @Get("/user/:userId")
  async findByUserId(@Param("userId") userId, @Res() res: Response) {

    try {

      const data = await this.compteService.findByUserId(userId);

      res.status(200).json({
        status: true,
        data
      })


    } catch (err) {

      res.status(501).json({
        status: false,
        err
      })

    }


  }


  @Get()
  findAll() {
    return this.compteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compteService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompteDto: UpdateCompteDto) {
    return await this.compteService.update(+id, updateCompteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compteService.remove(+id);
  }
}