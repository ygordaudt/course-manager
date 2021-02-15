import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

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
    AppComponent,
    CourseListComponent,
    CourseInfoComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
