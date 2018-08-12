import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: Http, private authService: AuthService) { }

  getProfile() {
    const headers = new Headers();
    const authToken = this.authService.loadToken();
    headers.append('Authorization', authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/auth/profile', {headers: headers}).pipe(map(res => res.json()));
  }
}
