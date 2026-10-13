import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';


@Injectable()
export class CourseService {
    private courses: any[] = [];
    getAllCourses(){
        return {
      message: 'All courses fetched successfully',
      data: this.courses,
    };
    }
    getCourseById(id: string){
        return {
      message: 'Course fetched successfully',
      id,
    };
    }
    createCourse(dto: CreateCourseDto){
        this.courses.push(dto);

        return{
            message: 'Course created successfully',
            data: dto,
        }
    }
    
updateCourse(id: string, dto: UpdateCourseDto) {
  const index = this.courses.findIndex(
    (course) => course.id === id,
  );

  if (index === -1) {
    throw new NotFoundException('Course not found');
  }

  this.courses[index] = {
    ...this.courses[index],
    ...dto,
  };

  return {
    message: 'Course updated successfully',
    id,
    data: this.courses[index],
  };
}

    patchCourse(id: string, dto: UpdateCourseDto){
        return{
            message: 'Course patched successfully',
            id,
            updatedFields: Object.keys(dto),
        }
        //return `Patch Course ${id} - from Service`;
    }
    deleteCourse(id: string) {
    return {
      message: 'Course deleted successfully',
      id,
    };
  }
}