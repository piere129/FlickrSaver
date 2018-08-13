import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private flashMessagesService: FlashMessagesService) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      this.flashMessagesService.show('You are not authorized to access this page, please log in!',
        { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
  }
}
