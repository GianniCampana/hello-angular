import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'courses', component: CourseListComponent },

  { path: 'students', component: StudentListComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
