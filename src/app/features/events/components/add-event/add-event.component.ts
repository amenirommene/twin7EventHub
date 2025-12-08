import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../../shared/validators/futur-date.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../../data-access/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  eventForm! : FormGroup;
  myForm2! : FormGroup;
  update:boolean=false;
  id! : number;
    // Expressions régulières
  titlePattern = '[a-zA-Z]*';  // Accepte seulement des lettres
  pricePattern = '\d+(\.\d{1,2})?$';  // Nombres et points (décimales autorisées)
  nbPlacesPattern = '^[1-9][0-9]?$|^100$';  // Nombres de 0 à 99
  constructor(private fb:FormBuilder, private ac:ActivatedRoute, private es:EventsService, private _router:Router){}

  buildForm(){
    //this.eventForm=new FormGroup({})
    this.eventForm = this.fb.group({
      //title : new FormControl('', [Validators.required,Validators.minLength(5)])
      title: [
        '',
        [Validators.required,Validators.minLength(5), Validators.pattern(this.titlePattern)]
      ],
      description: [
        '',
        [Validators.required, Validators.minLength(30)]
      ],
      date: [
        '',
        [Validators.required, futurDateValidator(7)]
      ],
     // place: ['', Validators.required],
      price: [
        '',
        [Validators.required]
      ],
      nbPlaces: [
        '',
        [Validators.required, Validators.pattern(this.nbPlacesPattern)]
      ],
      organizerId: [1, Validators.required],
      imageUrl: [''],
      nbLikes: [0],
      address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required]],
    }),
    domaines: new FormArray([this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])]),
    });
  }
  ngOnInit(){
//1- créer mon objet formulaire
this.buildForm();
//2- detecter s'il y un paramètre id dans l'URL ou non
this.ac.paramMap.subscribe(params=>{
  if(params.get('id')){
    this.id=Number(params.get('id'));
//3- si id existe alors je dois remplir le formulaire
   this.update=true;
   this.es.getEventByIdFromBackend(Number(params.get('id'))).subscribe(
    res=> this.eventForm.patchValue(res));

  }
})









   this.myForm2=new FormGroup({
    title:new FormControl(),
    description : new FormControl(),

   });
  }
soumettre(){

 if(this.update){
  //si id existe : cas de update
  this.es.updateEventInToBackend(this.id,this.eventForm.value).subscribe(()=>this._router.navigateByUrl("/events"));
 } else{
  //sinon : ajout
 this.es.addEventToBackend(this.eventForm.value).subscribe(()=>this._router.navigateByUrl("/events"));
 }

}
 get domaines() {
    return this.eventForm.get('domaines') as FormArray;
  }
  addDomain() {
    this.domaines.push(this.fb.control(''));
  }

  // Valide que la date est dans le futur avec un minimum de 7 jours
  dateValidator() {
    return (control: any) => {
      const selectedDate = new Date(control.value);
      const today = new Date();
      const minDate = new Date(today.setDate(today.getDate() + 7));  // Minimum 7 jours à partir d'aujourd'hui

      if (selectedDate <= minDate) {
        return { futureDateInvalid: 'La date doit être dans le futur, minimum 7 jours à partir d\'aujourd\'hui.' };
      }
      return null;
    };
  }

}
