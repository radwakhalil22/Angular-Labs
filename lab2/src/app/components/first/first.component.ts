import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  userInput = '';
  caption = '';

  resetValue() {
    this.userInput = '';
  }
  saveValue(){
    this.caption = this.userInput;
    this.resetValue();
  }
}
