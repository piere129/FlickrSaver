import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-images',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent implements OnInit {

  images: Image[];
  image: Image;
  title: string;
  description: string;
  url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';

  // dependency injection
  constructor(private imageService: ImageService, private flashMessagesService: FlashMessagesService, private router: Router) {
  }

  deleteImage(id: any) {
    const images = this.images;
    this.imageService.deleteImage(id).subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < images.length; i++) {
          if (images[i]._id === id) {
            images.splice(i, 1);
          }
        }
      }
    });
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
      this.flashMessagesService.show(newImage.title + ' has been added!', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/collection']);
    });

  }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => this.images = images);
  }

  sendResults() {

    if (this.title == null || this.url == null) {
      this.flashMessagesService.show('Title & Url can not be empty!', { cssClass: 'alert-danger', timeout: 3000 });
    } else {
      if (this.title != null && this.url != null) {
        this.addImage();
      }
    }
  }

  handleError() {
    this.url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';
  }
}
