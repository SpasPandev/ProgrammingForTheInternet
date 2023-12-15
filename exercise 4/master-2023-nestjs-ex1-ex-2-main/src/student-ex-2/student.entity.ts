import { University } from 'src/university-ex-3/university.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ nullable: true })
  age: number;

  @ManyToOne(() => University, (university) => university.students, {
    eager: true,
  })
  university: University;
}
