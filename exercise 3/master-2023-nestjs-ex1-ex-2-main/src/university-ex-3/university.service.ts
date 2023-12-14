import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { University } from './university.entity';

@Injectable()
export class UniversityService {
    
    constructor(
        @Inject('UNIVERSITY_REPOSITORY')
        private universityRepository: Repository<University>,
    ) { }

    async findAll(): Promise<University[]> {
        return this.universityRepository.find();
    }

    createOne(university) {
        return this.universityRepository.save(university);
      }
} 
