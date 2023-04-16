import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab3';

  Students: { name: string; age: string }[] = [];

  getDataFromChild(data: any) {
    this.Students.push(data);
    console.log(this.Students);
  }

  parentData = this.Students;
}
