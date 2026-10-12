import { Controller,Get, Param, Post,Patch,Delete,Put} from '@nestjs/common';
import { CourseService } from './course.service.js';

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
  createCourses(){
    return this.courseService.createCourse();
  }
  @Put(':id')
  UpdateCourses(@Param('id') id: string){
    return this.courseService.updateCourse(id);
  }
  @Patch(':id')
  PatchCourses(@Param('id') id: string){
    return this.courseService.patchCourse(id);
  }
  @Delete(':id')
  DeleteCourses(@Param('id') id: string){
    return this.courseService.deleteCourse(id);
  }


}
