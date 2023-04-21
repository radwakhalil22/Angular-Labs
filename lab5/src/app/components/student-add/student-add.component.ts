import { Component, ViewChild} from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent {
  @ViewChild('name') inputname: any;
  @ViewChild('username') inputuname: any;
  @ViewChild('email') inputemail: any;
  @ViewChild('phone') inputphone: any;
  @ViewChild('address') inputaddress: any;

  isAdded: boolean = false;
  constructor(private myService: StudentsService) {}

  Add(name: any, username: any, email: any, phone: any, address:any) {
    let newStudent = { name, username, email, phone, address };
    this.myService.AddNewStudent(newStudent).subscribe();
    this.isAdded = true;
  }

  reset() {
    this.inputname.nativeElement.value = '';
    this.inputuname.nativeElement.value = '';
    this.inputemail.nativeElement.value = '';
    this.inputphone.nativeElement.value = '';
    this.inputaddress.nativeElement.value = '';
  }
}
