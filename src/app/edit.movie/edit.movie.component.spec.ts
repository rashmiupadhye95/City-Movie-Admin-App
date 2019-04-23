import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit.MoviePage } from './edit.movie.page';

describe('Edit.MoviePage', () => {
  let component: Edit.MoviePage;
  let fixture: ComponentFixture<Edit.MoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit.MoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit.MoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
