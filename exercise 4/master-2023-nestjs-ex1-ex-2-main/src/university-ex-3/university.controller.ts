import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get()
  getUniversities() {
    return this.universityService.findAll();
  }

  @Post()
  createUniversity(@Body() university) {
    return this.universityService.createOne(university);
  }

  @Put(':id')
  updateUniversity(@Param('id') id, @Body() university) {
    return this.universityService.updateOne(id, university);
  }

  @Delete(':id')
  deleteUniversity(@Param('id') id) {
    return this.universityService.deleteOne(id);
  }
}
