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

    @ManyToOne(() => User, user => user.depenses)
    @JoinColumn({ name: "userId" })
    user: User;


}
