import { Injectable } from '@nestjs/common';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { timeStamp } from 'console';

@Injectable()
export class DepenseService {

  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {

  }

  async create(createDepenseDto: CreateDepenseDto) {

    let user = await this.userRepository.findOne({
      where: {
        id: createDepenseDto.userId
      }
    })

    if (!user) {
      throw new Error("user not found")
    }

    let newDepense = await this.depenseRepository.create({
      ...createDepenseDto,
      user
    })

    return await this.depenseRepository.save(newDepense)

  }

  findAll() {
    return `This action returns all depense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depense`;
  }

  update(id: number, updateDepenseDto: UpdateDepenseDto) {
    return `This action updates a #${id} depense`;
  }

  remove(id: number) {
    return `This action removes a #${id} depense`;
  }
}
