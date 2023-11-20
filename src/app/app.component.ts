import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'step-verification-task';
  showStep1: boolean = true;

  toggleStep() {
    this.showStep1 = !this.showStep1;
  }

  agedisplay() {
    // Your logic to display age
    console.log('Displaying age...');
  }
}
