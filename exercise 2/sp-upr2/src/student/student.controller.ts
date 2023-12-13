import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents(): Promise<Student[]> {

        return this.studentService.findAll();
    }


    @Post()
    createStudent(@Body() student) {

        return this.studentService.createOne(student);
    }
}
