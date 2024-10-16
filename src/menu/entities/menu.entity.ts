import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Menu {

    @PrimaryGeneratedColumn()
    menuId: number;

    @Column()
    menuName: string;

    @Column({unique: true})
    menuPrice: string;
    
}
