import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Revenu } from 'src/revenu/entities/revenu.entity';

@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>,
<<<<<<< HEAD
  ) { }
=======

    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>,
  ) {}
>>>>>>> 386373e012dfecb11fe608a011d9726773248c6b

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserIdByRevenuId(userId: number, revenuId: number): Promise<any> {
    const revenu = await this.revenuRepository.findOne({
      where: { idRevenu: revenuId },
      relations: ['user'],  // Charge la relation avec l'utilisateur
    });
    if (!revenu) {
      console.error('Revenu non trouvé pour l\'id :', revenuId);
      return null; 
    }
    const revenuUserId = Number(revenu.user.id);  
    const paramUserId = Number(userId);  
    if (revenuUserId !== paramUserId) {
      return null;  
    }
    return revenu; 
  }
  
  
  
  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
<<<<<<< HEAD
  }  // Méthode pour créer un utilisateur

=======
  }  
  
>>>>>>> 386373e012dfecb11fe608a011d9726773248c6b
  findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

<<<<<<< HEAD
  // Méthode pour supprimer un utilisateur
  async remove(id: number): Promise<void> {
    return await this.userRepository.delete(id).then(() => { });
=======
 async remove(id: number): Promise<void> {
    return await this.userRepository.delete(id).then(() => {});
>>>>>>> 386373e012dfecb11fe608a011d9726773248c6b
  }
}
