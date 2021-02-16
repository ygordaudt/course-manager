import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {

    constructor(private courseService: CourseService) { }

    filteredCourses: Course[] = [];
    _filterBy: string;
    _courses: Course[] = []; 

    ngOnInit(): void {
        this.retrieveAll();
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

    delete(course: Course): void {
        this.courseService.delete(course).subscribe({
            next: () => {
                console.log(`Course deleted with sucess`);
                this.retrieveAll();
            },
            error: err => console.log(err)
        });
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

}