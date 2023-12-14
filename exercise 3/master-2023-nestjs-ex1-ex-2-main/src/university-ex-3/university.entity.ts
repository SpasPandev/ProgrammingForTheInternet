import { Student } from "src/student-ex-2/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class University {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @OneToMany(() => Student, (student)=> student.university)
    students: Student[];
}