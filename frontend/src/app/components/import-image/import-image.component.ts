import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  constructor(private imageService: ImageService, private flashMessagesService: FlashMessagesService, private router: Router) {
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

  ngOnInit() {
    this.imageService.getImages().subscribe(images => this.images = images);
  }
}
