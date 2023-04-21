import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit  {
  ID: any
  student: any
  constructor(myRoute: ActivatedRoute, public myService: StudentsService){
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.getStudentbyID(this.ID).subscribe(
      {
        next:(data)=>{this.student = data;},
        error:(err)=>{console.log(err)}
      }
    );
  }
}
