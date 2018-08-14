import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Image } from '../../models/image';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: Http, private authService: AuthService) { }

  // retrieving images
  getImages() {
    return this.http.get('api/' + this.authService.user.id + '/images').pipe(map(res => res.json()));
  }

  getImage(id) {
    return this.http.get('api/' + this.authService.user.id + '/image/' + id).pipe(map(res => res.json()));
  }

  // adding an image
  addImage(newImage) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.post('api/' + this.authService.user.id + '/image', newImage,
      { headers: headers }).pipe(map(res => res.json()));
  }

  updateImage(editedImage) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    return this.http.put('api/' + this.authService.user.id + '/image', editedImage,
      { headers: headers }).pipe(map(res => res.json()));
  }

  // deleting an image
  deleteImage(id) {
    const headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    return this.http.delete('api/image/' + id, { headers: headers }).pipe(map(res => res.json()));
  }
}

