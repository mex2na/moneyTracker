import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revenu } from './entities/revenu.entity';
import { User } from '../user/entities/user.entity';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { Compte } from 'src/compte/entities/compte.entity';
import { CompteService } from 'src/compte/compte.service';

@Injectable()
export class RevenuService {
  constructor(
    @InjectRepository(Revenu)
    private readonly revenuRepository: Repository<Revenu>,

    @InjectRepository(Compte)
    private readonly compteRepository: Repository<Compte>,

    @Inject()
    private compteService: CompteService
  ) { }

  /*
  pour la créaction de compte: 
  - on verifie si le compte existe
  - 
  */

  async create(createRevenuDto: CreateRevenuDto): Promise<Revenu> {
    const compte = await this.compteRepository.findOne({
      where: {
        idCompte: createRevenuDto.compteId
      }
    });

    if (!compte) {
      throw new Error('Account not found');
    }

    const newRevenu = this.revenuRepository.create({
      ...createRevenuDto,
      compte: compte,
    });

    await this.compteService.upgradeSolde(newRevenu.compte.idCompte, newRevenu.montant)



    return await this.revenuRepository.save(newRevenu);
  }

  // async getRevenuByUserId(userId: number): Promise<Revenu[]> {
  //   const revenus = await this.revenuRepository.find({
  //     where: { user: { id: userId } },
  //     relations: ['user'],  
  //   });

  //   if (!revenus || revenus.length === 0) {
  //     throw new Error(`Aucun revenu trouvé pour l'utilisateur avec l'ID ${userId}`);
  //   }

  //   return revenus;  
  // }

  async findAll(): Promise<Revenu[]> {
    return this.revenuRepository.find({
      relations: ['compte'],
    });
  }

  async findOne(id: number): Promise<Revenu | null> {
    return this.revenuRepository.findOne({
      where: {
        idRevenu: id,
      },
      relations: ['compte'],
    });
  }

  async update(id: number, revenu: Partial<Revenu>): Promise<Revenu> {
    await this.revenuRepository.update(id, revenu);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    let revenu = await this.revenuRepository.findOne({
      where: {
        idRevenu: id
      },
      relations: ["compte"]
    })

    await this.compteService.degradeSolde(revenu.compte.idCompte, revenu.montant)

    await this.revenuRepository.delete(id);

  }
}
