import { Inject, Injectable } from '@nestjs/common';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { timeStamp } from 'console';
import { Compte } from 'src/compte/entities/compte.entity';
import { CompteService } from 'src/compte/compte.service';

@Injectable()
export class DepenseService {

  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,

    @InjectRepository(Compte)
    private compteRepository: Repository<Compte>,

    @Inject()
    private compteService: CompteService
  ) {

  }

  async create(createDepenseDto: CreateDepenseDto) {

    let compte = await this.compteRepository.findOne({
      where: {
        idCompte: createDepenseDto.userId
      }
    })

    if (!compte) {
      throw new Error("compte not found")
    }

    let newDepense = await this.depenseRepository.create({
      ...createDepenseDto,
      compte
    })

    await this.compteService.degradeSolde(newDepense.compte.idCompte, newDepense.montant)

    return await this.depenseRepository.save(newDepense)

  }


  // async getDepenseByUserId(userId: number): Promise<Depense[]> {


  //   // const depenses = await this.depenseRepository.find({
  //   //   where: {
  //   //     user: {
  //   //       id: userId
  //   //     }
  //   //   },
  //   //   relations: ["user"]
  //   // })

  //   // if (!depenses || depenses.length === 0) {
  //   //   throw new Error("no depenses found")
  //   // }

  //   // return depenses;


  // }

  async findOne(id: number): Promise<Depense> {

    let depense = await this.depenseRepository.findOne({
      where: {
        idDepense: id
      }
    })

    if (!depense) {
      throw new Error("Depense not found")
    }

    return depense;

  }

  async update(id: number, depense: Partial<Depense>): Promise<Depense> {
    await this.depenseRepository.update(id, depense);
    return this.findOne(id);
  }
  async remove(id: number): Promise<void> {
    const depense = await this.depenseRepository.findOne({
      where: {
        idDepense: id
      },
      relations: ["compte"]

    })

    await this.compteService.upgradeSolde(depense.compte.idCompte, depense.montant)

    await this.depenseRepository.delete(id);
  }
}
