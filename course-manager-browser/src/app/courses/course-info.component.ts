import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    course: Course = new Course();

    isEditing: boolean = false;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService, private router: Router)  {}

    ngOnInit(): void {
        let _idCourse: number =+ this.activateRoute.snapshot.paramMap.get('id');

        if (_idCourse) {
            this.courseService.retriveById(_idCourse).subscribe({
                next: course => this.course = course,
                error: err => console.log('Error', err)
            });
            this.isEditing = true;
        } else {
            this.course = new Course();
            this.isEditing = false;
        }
    }

    save(): void {
        if (this.isEditing) {
            this.courseService.update(this.course).subscribe({
                next: course => console.log(`Course updated with success`, course),
                error: err => console.log(err)
            });
        } else {
            this.courseService.create(this.course).subscribe({
                next: course => console.log(`Course created with success`, course),
                error: err => console.log(err)
            });
        }
        this.router.navigate(['/courses'], {relativeTo: this.activateRoute});
    }
}