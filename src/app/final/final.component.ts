import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { StepDirective } from '../step.directive';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
})
export class FinalComponent {
  @ViewChild(StepDirective)
  appsteps!: StepDirective;

  currentStep = 1;
  private componentRef: any;

  public componentTypes = [Step1Component, Step2Component, Step3Component];

  constructor() {}

  ngAfterViewInit() {
    this.loadComponent();
  }

  showStep(stepNumber: number) {
    this.currentStep = stepNumber;
    this.loadComponent();
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
      this.loadComponent();
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.loadComponent();
    }
  }

  private loadComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    const currentComponent = this.componentTypes[this.currentStep - 1];
    let viewContainerRef = this.appsteps.viewContainerRef;
    viewContainerRef.clear();

    // Instantiate the component directly
    this.componentRef = viewContainerRef.createComponent(currentComponent);
  }
}
