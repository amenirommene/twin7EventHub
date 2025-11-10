import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent {
  price : number = 0;
  idEvent! : number;
  username : string = "";
  constructor(private ac:ActivatedRoute){}
  ngOnInit(){
   this.ac.paramMap.subscribe(res=>{
    this.price=Number(res.get('price'));
    console.log(this.price);
    this.idEvent=Number(res.get('id'))})
  }
  onSubmit(f:NgForm){
  }
}
