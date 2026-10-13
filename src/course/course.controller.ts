import { Controller,Get, Param, Post,Patch,Delete,Put, Body} from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }
  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }
  @Post()
  createCourses(@Body() dto: CreateCourseDto) {
    return this.courseService.createCourse(dto);
  }
  @Put(':id')
  UpdateCourses(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.courseService.updateCourse(id, dto);
  }
  @Patch(':id')
  PatchCourses(@Param('id') id: string, @Body() dto:UpdateCourseDto) {
    return this.courseService.patchCourse(id, dto);
  }
  @Delete(':id')
  DeleteCourses(@Param('id') id: string){
    return this.courseService.deleteCourse(id);
  }


}
