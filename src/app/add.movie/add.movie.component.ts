import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MovieService from '../movie.service';

@Component({
  selector: 'app-add.movie',
  templateUrl: './add.movie.component.html',
  styleUrls: ['./add.movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  movie = {name:'', year:'', image_url:'', production_house:'', rating:'', type:'',language:'',date:'', likes:''};
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {}

  addMovie(){
  	this.movieService.addRemoteMovie(this.movie).subscribe(()=>{this.router.navigate(['/list-movies']);});
  }

}
