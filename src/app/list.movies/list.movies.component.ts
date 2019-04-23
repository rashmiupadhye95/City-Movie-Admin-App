import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.movies',
  templateUrl: './list.movies.component.html',
  styleUrls: ['./list.movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private router:Router) { }
  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;}); 
  }

  movies = [];

  deleteMovie(movie){
    this.movieService.deleteRemoteMovie(movie).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  });
}
  editMovie(movie){
    this.router.navigate(['/edit-movies/'+movie.id]);
  }

}
