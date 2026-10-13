var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let CourseService = class CourseService {
    courses = [];
    getAllCourses() {
        return {
            message: 'All courses fetched successfully',
            data: this.courses,
        };
    }
    getCourseById(id) {
        return {
            message: 'Course fetched successfully',
            id,
        };
    }
    createCourse(dto) {
        this.courses.push(dto);
        return {
            message: 'Course created successfully',
            data: dto,
        };
    }
    updateCourse(id, dto) {
        const index = this.courses.findIndex((course) => course.id === id);
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
    patchCourse(id, dto) {
        return {
            message: 'Course patched successfully',
            id,
            updatedFields: Object.keys(dto),
        };
    }
    deleteCourse(id) {
        return {
            message: 'Course deleted successfully',
            id,
        };
    }
};
CourseService = __decorate([
    Injectable()
], CourseService);
export { CourseService };
//# sourceMappingURL=course.service.js.map