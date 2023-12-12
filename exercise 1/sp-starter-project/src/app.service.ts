import { Injectable } from '@nestjs/common';
import { Student } from './student.interface';
import { Teacher } from './teacher.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStudents(): Student[] {

    return [
      {
        name: 'Spas Pandev',
        age: 24
      },
      {
        name: 'Petar Petrov',
        age: 30
      }
    ];
  }

  getTeachers(): Teacher[] {

    return [
      {
        name: 'Mr. Ivanov',
        students: this.getStudents()
      }
    ]
      ;
  }
}
