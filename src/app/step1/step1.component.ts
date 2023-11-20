import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AgeComponent } from '../age/age.component';
import { NameComponent } from '../name/name.component';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component {
  // step: string = 'name';

  // showAge() {
  //   this.step = 'age';
  // }
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer!: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(component: string) {
    this.dynamicComponentContainer.clear();
    let componentFactory;

    switch (component) {
      case 'name':
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(NameComponent);
        break;
    }

    // if (componentFactory) {
    //   const componentRef =
    //     this.dynamicComponentContainer.createComponent(componentFactory);
    // }
  }
}
