import { Component } from '@angular/core';
@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css'],
})
export class AgeComponent {
  // age = Number;
  // agedisplay() {
  //   console.log('Age works');
  // }
  // showInput: boolean = false;
  age!: number;

  // toggleInput() {
  //   this.showInput = !this.showInput;
  // }

  // agedisplay() {
  //   // Your logic to display age
  //   console.log(this.age);
  // }
}
