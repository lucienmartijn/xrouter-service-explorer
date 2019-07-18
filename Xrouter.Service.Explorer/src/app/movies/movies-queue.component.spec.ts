import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesQueueComponent } from './movies-queue.component';

describe('MoviesQueueComponent', () => {
  let component: MoviesQueueComponent;
  let fixture: ComponentFixture<MoviesQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
