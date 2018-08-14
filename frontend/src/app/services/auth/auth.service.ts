import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('auth/register', user, { headers: headers }).pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('auth/authenticate', user, { headers: headers }).pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    this.authToken = token;
    this.user = user;
  }

  getUsers() {
    return this.http.get('auth/users').pipe(map(res => res.json()));
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  isLoggedIn() {
    if (this.authToken != null) {
      return true;
    }
    return false;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    return token;
  }
}
