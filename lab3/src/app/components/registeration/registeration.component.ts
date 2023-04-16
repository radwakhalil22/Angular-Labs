import { Component , EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent {
  @HostListener('window:keydown.enter') enterEvent() {
    this.SendDataToparent();
  }
  @Output() myEvent = new EventEmitter();

  student = {
    name: '',
    age: '',
  };

  studentName = '';
  studentAge = '';

  SendDataToparent() {
    const newStudent = {
      name: this.studentName,
      age: this.studentAge,
    };

    if (newStudent.name.length > 3) {
      if (+newStudent.age > 20 && +newStudent.age < 40) {
        this.myEvent.emit(newStudent);
        this.studentName='';
        this.studentAge='';
      }
    }
  }
}
