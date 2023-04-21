import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any
  constructor(public myService: StudentsService){

  }
  ngOnInit(): void {
      this.myService.getAllStudents().subscribe({
        next: (data) => {
          this.students = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteStudent(id: any){
    this.myService.deleteStudent(id).subscribe(
      ()=> this.ngOnInit(),
      (err) => {console.log(err)}
    )
    
  }
}
