import { take } from 'rxjs/internal/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  private image;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
    this.imageService.getImage(id).subscribe(image => this.image = image);
  }

}
