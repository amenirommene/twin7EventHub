import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighLightDirective } from './directives/high-light.directive';
import { ContainsPipe } from './pipes/contains.pipe';



@NgModule({
  declarations: [
    HighLightDirective,
    ContainsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighLightDirective,
    ContainsPipe
  ]
})
export class SharedModule { }
