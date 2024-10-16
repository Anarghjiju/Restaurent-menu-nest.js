import {IsNotEmpty, IsString } from "class-validator";



export class CreateMenuDto {

    @IsNotEmpty()
    @IsString()
    menuName: string;

    @IsNotEmpty()
    @IsString()
    menuPrice: string;
}
