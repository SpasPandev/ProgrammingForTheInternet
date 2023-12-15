import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModuleEx2 } from './student-ex-2/student-ex2.module';
import { StudentModuleEx1 } from './student-ex-1/student-ex1.module';
import { UniversityModule } from './university-ex-3/university.module';

@Module({
  imports: [StudentModuleEx1, StudentModuleEx2, UniversityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
