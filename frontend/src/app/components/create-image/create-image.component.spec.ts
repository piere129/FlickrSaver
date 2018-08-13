import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImageComponent } from './create-image.component';
import { FormsModule } from '@angular/forms';


describe('CreateImageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateImageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateImageComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  });



});
