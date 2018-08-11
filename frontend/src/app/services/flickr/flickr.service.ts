import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  key = 'a747dd54e2adb4c600712193bb35c877';

  constructor(private http: Http) {}

  testUrl(searchTerm) {
    const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&' +
    'api_key=' + this.key + '&tags='
    + searchTerm + '&format=json&nojsoncallback=1';
    return this.http.get(url);
    }


}
