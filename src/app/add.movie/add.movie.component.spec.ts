import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.MoviePage } from './add.movie.page';

describe('Add.MoviePage', () => {
  let component: Add.MoviePage;
  let fixture: ComponentFixture<Add.MoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add.MoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.MoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
