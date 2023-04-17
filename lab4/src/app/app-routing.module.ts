import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: StudentFormComponent },
  { path: 'students/:id', component: StudentDetailsComponent},
  { path: 'students', component: StudentsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
