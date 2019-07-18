import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInquiryComponent } from './movies-inquiry.component';

describe('MoviesInquiryComponent', () => {
  let component: MoviesInquiryComponent;
  let fixture: ComponentFixture<MoviesInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
