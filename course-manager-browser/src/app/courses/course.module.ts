import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule, Routes } from "@angular/router"
import { Error404Component } from "../core/components/error-404/error-404.component"
import { StarModule } from "../shared/components/star/start.module"
import { AppPipeModule } from "../shared/pipes/app-pipe.module"
import { CourseInfoComponent } from "./course-info.component"
import { CourseListComponent } from "./course-list.component"

// Const created to fix the problem with Route imports
const ROUTES: Routes = [
    {path: 'courses', component: CourseListComponent},
    {path: 'courses/info', component: CourseInfoComponent}, // this is for add a course
    {path: 'courses/info/:id', component: CourseInfoComponent}, // this is for edit a course
    {path: '', redirectTo: 'courses', pathMatch: 'full'},
    {path: '**', component: Error404Component},
]

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class CourseModule {

}

