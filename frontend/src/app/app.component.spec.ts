import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Component } from '../../node_modules/@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      providers: [FlashMessagesService]
    }).compileComponents();
  }));

  @Component({
    selector: 'app-navbar',
    template: ''
  })
  class MockNavComponent {

  }

});
