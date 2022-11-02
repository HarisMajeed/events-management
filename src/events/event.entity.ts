import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attendee } from "./attendee.entity";

@Entity('event')
export class Events{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    when: Date;

    @Column()
    address:string;

    @OneToMany(()=>Attendee, (attendee) => attendee.events)
    
    attendee: Attendee[]
}