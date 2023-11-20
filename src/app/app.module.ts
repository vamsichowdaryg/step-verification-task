import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { NameComponent } from './name/name.component';
import { AgeComponent } from './age/age.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { FinalComponent } from './final/final.component';
import { StepDirective } from './step.directive';
import { SubComponentComponent } from './sub-component/sub-component.component';

@NgModule({
  declarations: [AppComponent, Step1Component, NameComponent, AgeComponent, Step2Component, Step3Component, FinalComponent, StepDirective, SubComponentComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
