import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './student.interface';
import { Teacher } from './teacher.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('students')
  getStudents(): Student[] {

    return this.appService.getStudents();
  }

  @Get('teacher')
  getTeacher(): Teacher[] {

    return this.appService.getTeachers();
  }
}
