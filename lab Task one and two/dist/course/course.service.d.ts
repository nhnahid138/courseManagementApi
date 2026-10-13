import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
export declare class CourseService {
    private courses;
    getAllCourses(): {
        message: string;
        data: any[];
    };
    getCourseById(id: string): {
        message: string;
        id: string;
    };
    createCourse(dto: CreateCourseDto): {
        message: string;
        data: CreateCourseDto;
    };
    updateCourse(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        data: any;
    };
    patchCourse(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        updatedFields: string[];
    };
    deleteCourse(id: string): {
        message: string;
        id: string;
    };
}
