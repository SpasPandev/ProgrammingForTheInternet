import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UniversityController } from './university.controller';
import { universityProviders } from './university.provider';
import { UniversityService } from './university.service';

@Module({
  controllers: [UniversityController],
  imports: [DatabaseModule],
  providers: [...universityProviders, UniversityService],
})
export class UniversityModule {}
