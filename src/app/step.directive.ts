import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appsteps]',
})
export class StepDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
