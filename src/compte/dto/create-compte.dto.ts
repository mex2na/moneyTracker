import { Depense } from "src/depense/entities/depense.entity";
import { Revenu } from "src/revenu/entities/revenu.entity";

export class CreateCompteDto {

    name: string;

    solde: number;

    idUser: number;


}
