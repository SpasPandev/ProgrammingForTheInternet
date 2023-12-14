import { Body, Controller, Get, Post, } from '@nestjs/common';
import { UniversityService } from "./university.service";

@Controller('university')
export class UniversityController {
    constructor(private readonly universityService: UniversityService) { }

    @Get()
    getUniversities() {
        return this.universityService.findAll();
    }


    @Post()
    createUniversity(@Body() university) {
        return this.universityService.createOne(university);
    }

}
