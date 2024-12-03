import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Revenu } from 'src/revenu/entities/revenu.entity';
import { Depense } from 'src/depense/entities/depense.entity';
import { Compte } from 'src/compte/entities/compte.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @OneToMany(() => Revenu, (revenu) => revenu.user)
  // revenus: Revenu[];

  // @OneToMany(() => Depense, (depense) => depense.user)
  // depenses: Depense[];

  @OneToMany(() => Compte, compte => compte.user)
  comptes: Compte[];

  @ManyToMany(() => Compte, compte => compte.collab)
  @JoinTable({ name: "collaboration" })
  comptePartage: Compte[];
}
