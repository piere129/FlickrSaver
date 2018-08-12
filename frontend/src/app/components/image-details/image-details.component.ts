import { take } from 'rxjs/internal/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../services/image/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private imageService: ImageService, private router: Router) { }

  private image;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.imageService.getImage(id).subscribe(image => this.image = image);
  }

  onDelete() {
    this.imageService.deleteImage(this.image._id).subscribe(data => {
      this.imageService.getImages().subscribe(images => this.router.navigate(['/collection']));
    }
    );
  }

  onUpdate() {
    this.router.navigate(['/edit-image/' + this.image._id]);
  }

  goBackToCollection() {
    this.router.navigate(['/collection']);
  }

}
