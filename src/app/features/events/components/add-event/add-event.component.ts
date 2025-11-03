import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  myForm! : FormGroup;
  myForm2! : FormGroup;

  ngOnInit(){

   this.myForm=new FormGroup({
    description : new FormControl('', Validators.required),
    title:new FormControl('',[Validators.required,Validators.minLength(6)])

   });


   this.myForm2=new FormGroup({
    title:new FormControl(),
    description : new FormControl()
   });
  }

}
