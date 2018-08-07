import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Image } from './models/image';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: Http ) { }

  // retrieving images
  getImages() {
    return this.http.get('http://localhost:3000/api/images').pipe(map(res => res.json()));
  }

  // adding an image
  addImage(newImage) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/image', newImage, { headers: headers }).pipe(map(res => res.json()));
  }

  // deleting an image
  deleteImage(id) {
    return this.http.delete('http://localhost:3000/api/image/' + id).pipe(map(res => res.json()));
  }
}

