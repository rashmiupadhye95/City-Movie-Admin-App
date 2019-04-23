import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List.MoviesPage } from './list.movies.page';

describe('List.MoviesPage', () => {
  let component: List.MoviesPage;
  let fixture: ComponentFixture<List.MoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List.MoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List.MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
