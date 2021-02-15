import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    course: Course;

    _isEditing: boolean = false;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService, private router: Router)  {}

    ngOnInit(): void {
        let _idCourse: number =+ this.activateRoute.snapshot.paramMap.get('id');

        if (_idCourse) {
            this.course = this.courseService.retriveById(_idCourse);
            this._isEditing = true;
        } else {
            this.course = new Course();
            this.course.id = this.courseService.getLastId() + 1;
            this._isEditing = false;
        }
    }

    save(): void {
        if (this._isEditing) {
            this.courseService.edit(this.course);
        } else {
            this.courseService.create(this.course);
        }
        this.router.navigate(['/courses'], {relativeTo: this.activateRoute});
    }
}