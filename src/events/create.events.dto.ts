import { IsDateString, IsString, Length } from "class-validator";

export class CreateEventDto{
    @IsString() 
    @Length(3,10,{message:"Name length should be correct"})
    name:string;
    @IsString()
    @Length(3,10,{message:"Description length should be correct"})
    description:string;
    @IsDateString()
    when: string;
    @IsString()
    @Length(3,10,{message:"Address length should be correct"})
    address:string;
}