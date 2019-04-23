import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit 

{
  private selectedItem: any;
  private icons = [
    'videocam',
    'videocam',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router) {
  	this.items.push({
  		title: 'List',
        note:'/list-movies',
        icon: this.icons[0]
  	});
  	this.items.push({
  		title: 'Add',
  		note:'/add-movies',
      icon: this.icons[1]
  	});
  }
  openUrl(item){
    this.router.navigate([item.note]);
  }

  ngOnInit() {}
}