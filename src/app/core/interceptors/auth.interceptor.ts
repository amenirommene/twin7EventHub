import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Interceptor HTTP qui ajoute automatiquement le token d'authentification
 * à toutes les requêtes HTTP sortantes
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Récupérer le service d'authentification
  const authService = inject(AuthService);

  // Récupérer le token depuis le localStorage
  const token = authService.getToken();

  // Si un token existe, l'ajouter dans les en-têtes de la requête
  if (token) {
    // Cloner la requête et ajouter l'en-tête Authorization
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Passer la requête (modifiée ou non) au prochain handler
  return next(req);
};

