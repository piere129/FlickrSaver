import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  validateRegister(user) {
    if (user.email === undefined || user.password === undefined
      || user.username === undefined || user.confirmPassword === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateEmptyName(name) {
    if (name === undefined) {
      return true;
    }
    return false;
  }

  validateLogin(user) {
    if (user.username === '' || user.password === ''
      || user.username === undefined || user.password === undefined) {
        return false;
      }
      return true;
  }
}
