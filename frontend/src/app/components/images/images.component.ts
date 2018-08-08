import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: Image[];
  image: Image;
  title: string;
  description: string;
  url: string;

  // dependency injection
  constructor(private imageService: ImageService) {
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
    });

  }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => this.images = images);

  }

}
