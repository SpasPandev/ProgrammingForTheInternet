import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { studentProviders } from './student.providers';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({

    controllers: [StudentController],
    imports: [DatabaseModule],
    providers: [
        ...studentProviders,
        StudentService,
    ],
})
export class StudentModule { }