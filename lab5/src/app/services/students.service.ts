import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: any;
  private readonly Base_URL = 'http://localhost:3000/students';
  constructor(private readonly myClient: HttpClient) {}

  getAllStudents() {
    return this.myClient.get(this.Base_URL);
  }

  getStudentbyID(id: any) {
    return this.myClient.get(this.Base_URL + "/" + id);
  }

  AddNewStudent(newstudent :any){
    return this.myClient.post(this.Base_URL  , newstudent);
  }


  deleteStudent(id: any) {
    return this.myClient.delete(this.Base_URL + '/' + id);
  }

  updateStudent(id: any, updatedStudent:any) {
    console.log(id, updatedStudent);
    return this.myClient.put(this.Base_URL + '/' + id , updatedStudent);
  }
}
