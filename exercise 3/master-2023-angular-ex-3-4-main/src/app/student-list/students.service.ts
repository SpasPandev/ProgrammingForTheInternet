import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './student.interface';

@Injectable()
export class StudentService {
  private readonly _students = new BehaviorSubject<Student[]>([
    { id: 1, name: 'Georgi', age: 20, university: {id: 1, name: 'TU-SOFIA'} },
    { id: 2, name: 'Ivan', age: 21, university: {id: 1, name: 'TU-SOFIA'}  },
    { id: 3, name: 'Maria', age: 22, university: {id: 3, name: 'UNSS'}  },
  ]);
  public readonly students$ = this._students.asObservable();

  get students(): Student[] {
    return this._students.getValue();
  }

  private set students(val: Student[]) {
    this._students.next(val);
  }

  addStudent(student: Student) {
    this.students = [
      ...this.students,
      { id: this.students.length + 1, name: student.name, age: student.age, university:student.university },
    ];
  }

  removeStudent(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
