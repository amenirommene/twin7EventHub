import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighLightDirective } from './directives/high-light.directive';



@NgModule({
  declarations: [
    HighLightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
