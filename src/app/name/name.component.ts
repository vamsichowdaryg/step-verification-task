import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent {
  currentStep = 0;
  // showInput: boolean = false;
  name!: string;
  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }
  prevStep() {}
  // toggleInput() {
  //   this.showInput = !this.showInput;
  // }
  // displayname() {
  //   console.log(this.name);
  // }
}
