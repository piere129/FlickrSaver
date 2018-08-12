import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { Image } from '../../models/image';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  image: Image;
  title: string;
  description: string;
  url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';

  constructor(private imageService: ImageService, private flashMessagesService: FlashMessagesService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.imageService.getImage(id).subscribe(image => {
      this.image = image;
      this.title = image.title;
      this.description = image.description;
      this.url = image.url;
    });
  }

  handleError() {
    this.url = this.image.url;
  }

  sendResults() {
    if (this.title == null || this.url == null) {
      this.flashMessagesService.show('Title & Url can not be empty!', { cssClass: 'alert-danger', timeout: 3000 });
    } else {
      if (this.title != null && this.url != null) {
        this.updateImage();
      }
    }
  }

  updateImage() {
    this.image.title = this.title;
    this.image.description = this.description;
    this.image.url = this.url;
    this.imageService.updateImage(this.image).subscribe(data => {
      this.flashMessagesService.show('Image updated!', { cssClass: 'alert-success', timeout: 3000 });
    });


  }

}
