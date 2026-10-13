import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): {
        message: string;
        data: any[];
    };
    getCourseById(id: string): {
        message: string;
        id: string;
    };
    createCourses(dto: CreateCourseDto): {
        message: string;
        data: CreateCourseDto;
    };
    UpdateCourses(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        data: any;
    };
    PatchCourses(id: string, dto: UpdateCourseDto): {
        message: string;
        id: string;
        updatedFields: string[];
    };
    DeleteCourses(id: string): {
        message: string;
        id: string;
    };
}
