import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Compte } from 'src/compte/entities/compte.entity';

@Entity()
export class Revenu {
  @PrimaryGeneratedColumn()
  idRevenu: number;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  montant: number;

  @Column('date')
  date: string;


  @ManyToOne(() => User, user => user.revenusPerso)
  @JoinColumn({ name: "userId" })
  user: User

  @ManyToOne(() => Compte, compte => compte.revenus)
  @JoinColumn({ name: "compteId" })
  compte: Compte
}
