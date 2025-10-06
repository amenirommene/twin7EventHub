import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isAdmin : boolean = false;
cssAdmin :string = "navbar navbar-expand-lg bg-dark navbar-dark border-bottom shadow-sm";
cssNotAdmin :string = "navbar navbar-expand-lg bg-light navbar-light border-bottom shadow-sm";
getClass() : string {
  if (this.isAdmin)
     return this.cssAdmin
  else
    return this.cssNotAdmin
}
}
