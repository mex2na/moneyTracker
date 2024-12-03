import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { Response } from 'express';

@Controller('depense')
// @UseGuards(JwtAuthGuard)
export class DepenseController {
  constructor(private readonly depenseService: DepenseService) { }

  @Post()
  async create(@Body() createDepenseDto: CreateDepenseDto, @Res() res: Response) {

    try {

      let newDepense = await this.depenseService.create(createDepenseDto)

      res.status(200).json({
        data: newDepense,
        status: true
      })

    } catch (err) {

      res.status(501).json({
        status: false,
        data: err
      })


    }

    // return this.depenseService.create(createDepenseDto);
  }

  @Get("user/:userId")
  async getDepenseByUserId(@Param("userId") userId: number, @Res() res: Response) {
    // try {
    //   // const depenses = await this.depenseService.getDepenseByUserId(userId)

    //   res.status(201).json({
    //     status: true,
    //     data: depenses
    //   })
    // } catch (err) {

    //   res.status(500).json({
    //     status: false,
    //     data: err
    //   })
    // }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depenseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepenseDto: UpdateDepenseDto) {
    return this.depenseService.update(+id, updateDepenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depenseService.remove(+id);
  }
}
