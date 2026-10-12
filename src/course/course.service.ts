import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(){
        return 'Get All Courses - from Service';
    }
    getCourseById(id: string){
        return `Get Course with ID: ${id} - from Service`;
    }
    createCourse(){
        return 'Create Course - from Service';
    }
    updateCourse(id: string){
        return `Update Course ${id} - from Service`;
    }
    patchCourse(id: string){
        return `Patch Course ${id} - from Service`;
    }
    deleteCourse(id: string){
        return `Delete Course ${id} - from Service`;
    }

}

//  getAllCourses()
// o getCourseById(id: string)
// o createCourse()
// o updateCourse(id: string)
// o patchCourse(id: string)
// o deleteCourse(id: string)

// Get All Courses - from Service
// o Get Course with ID: 10 - from Service
// o Create Course - from Service
// o Update Course 10 - from Service
// o Patch Course 10 - from Service
// o Delete Course 10 - from Service