import { Compte } from "src/compte/entities/compte.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Depense {

    @PrimaryGeneratedColumn()
    idDepense: number;

    @Column()
    description: string;

    @Column()
    montant: number;

    @Column()
    date: Date;



    @ManyToOne(() => Compte, compte => compte.depenses)
    @JoinColumn({ name: "compteId" })
    compte: Compte;



}
