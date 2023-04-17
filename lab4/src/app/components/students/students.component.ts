import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
Students: { name: string, age: number }[] = [{
    name: 'Radwa',
    age: 25
  },
    {
      name: 'Alaa',
      age: 25
  },
  {
    name: 'Nourhan',
    age: 27
}];
}
