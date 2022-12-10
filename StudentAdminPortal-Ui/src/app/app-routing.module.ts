import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingelStudentComponent } from './students/singel-student/singel-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: SingelStudentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
