import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css'],
})
export class StudentupdateComponent implements OnInit  {
  ID: any;
  updateStudent: any;
  isUpdated: boolean = false;

  constructor(public myRoute: ActivatedRoute ,public myService: StudentsService){
    this.ID = myRoute.snapshot.params["id"];
    console.log(this.ID * 1);
  }
  ngOnInit(): void {
    this.myService.getStudentbyID(this.ID).subscribe({
      next: (data)=>{this.updateStudent = data;},
      error: (err)=>{console.log(err)}
    });
    console.log(this.ID);
  }

  update(name:any, username:any, email:any, phone:any,address:any){
    let newStudent = {name, username, email, phone, address};
    this.myService
      .updateStudent(this.ID, newStudent)
      .subscribe();
    this.isUpdated = true;
  }
}
