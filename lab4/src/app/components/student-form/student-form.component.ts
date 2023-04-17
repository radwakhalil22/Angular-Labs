import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  @HostListener('window:keydown.enter') enterEvent() {
    this.Add();
  }


  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, Validators.email),
  });

  get AgeValid() {
    return this.validationForm.controls['age'].valid;
  }
  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get nameValid() {
    return this.validationForm.controls['name'].valid;
  }

  hasNameValue() {
  return this.validationForm.controls["name"].value;
}

  Add() {
    if (this.validationForm.valid) {
      alert('added successfully');
    }
    else{
      alert('Invalid Data');
    }
  }
}
