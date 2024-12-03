import { Depense } from "src/depense/entities/depense.entity";
import { Revenu } from "src/revenu/entities/revenu.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compte {

    @PrimaryGeneratedColumn()
    idCompte: number;

    @Column()
    name: string;

    @Column({ default: 0 })
    solde: number;

    @OneToMany(() => Revenu, revenu => revenu.compte)
    revenus: Revenu[]

    @OneToMany(() => Depense, depense => depense.compte)
    depenses: Depense[]

    @ManyToOne(() => User, user => user.comptes)
    @JoinColumn({ name: "userId" })
    user: User


}
