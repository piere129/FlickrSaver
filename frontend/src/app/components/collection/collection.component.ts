import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  images: Image[];
  image: Image;
  title: string;
  description: string;
  url: string;

  constructor(private imageService: ImageService, private router: Router) { }

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

  onSelect(image) {
    this.router.navigate(['/collection', image._id]);
  }

}
