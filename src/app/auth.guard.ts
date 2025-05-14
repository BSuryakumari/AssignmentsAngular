import { Injectable, Inject } from '@angular/core';
import { AuthService } from './auth.service';  

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(@Inject(AuthService) private authService: AuthService) {}
}
