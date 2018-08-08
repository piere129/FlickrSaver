import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private flashMessagesService: FlashMessagesService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('You have succesfully logged in!', {cssClass: 'alert-success', timeout: 3000});

        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
