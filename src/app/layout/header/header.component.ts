import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';

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
currentUser: User | null = null;
  isAuthenticated: boolean = false;
  private subscriptions = new Subscription();

  // Injection des services via le constructeur
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // S'abonner aux changements de l'utilisateur actuel
    this.subscriptions.add(
      this.authService.currentUser$.subscribe(user => {
        this.currentUser = user;
      })
    );

    // S'abonner aux changements de l'état d'authentification
    this.subscriptions.add(
      this.authService.isAuthenticated$.subscribe(isAuth => {
        this.isAuthenticated = isAuth;
      })
    );
  }

  ngOnDestroy(): void {
    // Nettoyer les abonnements pour éviter les fuites mémoire
    this.subscriptions.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }

}
