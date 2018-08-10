import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  goToMyImages() {
    this.router.navigate(['/collection']);
  }

  goToAddImage() {
    this.router.navigate(['/create-image']);
  }

  goToFlickr() {
   this.router.navigate(['/import-image']);
  }

}
