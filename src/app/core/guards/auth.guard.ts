import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard pour protéger les routes qui nécessitent une authentification
 * Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion
 */
export const authGuard: CanActivateFn = (route, state) => {
  // Récupérer les services nécessaires
  const authService = inject(AuthService);
  const router = inject(Router);

  // Vérifier si l'utilisateur est connecté
  if (authService.isLoggedIn()) {
    // L'utilisateur est connecté, autoriser l'accès
    return true;
  }

  // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
  // On sauvegarde l'URL demandée pour y rediriger après la connexion
  router.navigate(['/users/sign-in'], { queryParams: { returnUrl: state.url } });
  return false;
};

