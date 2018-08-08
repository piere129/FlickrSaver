import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../services/validator/validator.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  confirmPassword: String;

  constructor(private validatorService: ValidatorService, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const userTemp = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    if ( !this.validatorService.validateRegister(userTemp)) {
      this.flashMessagesService.show('Please fill in all fields!', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if ( !this.validatorService.validateEmail(userTemp.email)) {
      this.flashMessagesService.show('Please use a valid email!', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    return true;
  }

}
