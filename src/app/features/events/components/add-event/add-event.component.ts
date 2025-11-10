import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../../shared/validators/futur-date.validator';

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
    title:new FormControl('',[Validators.required,Validators.minLength(10)]),
    date:new FormControl('',[Validators.required,futurDateValidator(7)]),
    price : new FormControl('', [Validators.required, Validators.pattern("^\\d+(\\.\\d+)?$")
    ])

   });


   this.myForm2=new FormGroup({
    title:new FormControl(),
    description : new FormControl(),

   });
  }

  get title(){
    return this.myForm.get('title');  }
     get price(){
    return this.myForm.get('price');  }
  get date(){
    return this.myForm.get('date');  }
}
