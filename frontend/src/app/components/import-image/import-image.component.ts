import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlickrService } from '../../services/flickr/flickr.service';
import { Convert, RootObject } from '../../models/flickr/flickr';

@Component({
  selector: 'app-import-image',
  templateUrl: './import-image.component.html',
  styleUrls: ['./import-image.component.css']
})
export class ImportImageComponent implements OnInit {

  images: Image[];
  image: Image;
  searchTerm: string;
  title: string;
  description: string;
  url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';

  // dependency injection
  constructor(private imageService: ImageService, private flashMessagesService: FlashMessagesService,
     private router: Router, private flickrService: FlickrService) {
  }

  addImage() {
    const newImage = {
      title: this.title,
      description: this.description,
      url: this.url
    };
    this.imageService.addImage(newImage).subscribe(image => {
      this.images.push(image);
      this.imageService.getImages().subscribe(images => this.images = images);
      this.router.navigate(['/collection']);
    });

  }

  testUrl() {
    let json;
     this.flickrService.testUrl(this.searchTerm).subscribe(response => {
        json = response.json();
        this.setText(json);
    });
  }

  ngOnInit() {
  }

  setText(json) {
    const stringjson = JSON.stringify(json);
    const rootObject = Convert.toRootObject(stringjson);
    console.log(rootObject);
    this.images = [];

    if ( rootObject.stat === 'ok') {
      for ( const photo of rootObject.photos.photo ) {
        // http://farm{farmid}.staticflickr.com/{server-id}/{id}_{secret}{size}.jpg
         const photoUrl = 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server
         + '/' + photo.id + '_' + photo.secret + '_n.jpg';
        this.images.push(new Image(photoUrl));
      }
    }
  }
}
