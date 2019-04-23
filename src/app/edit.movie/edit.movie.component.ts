import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieService from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit.movie',
  templateUrl: './edit.movie.component.html',
  styleUrls: ['./edit.movie.component.scss'],
})
export class EditMovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService:MovieService, private router: Router) { }
  id: number;
  private sub: any;
  movie:any;
  ngOnInit() {
    this.movie = {name:'', year:'', image_url:'', production_house:'',
     rating:'', type:'',language:'',date:'', likes:''};
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.movieService.getRemoteMovieById(this.id).subscribe((movie)=>{this.movie = movie;});
    });
  }

  updateMovie(){
    this.movieService.updateRemoteMovie(this.movie).
    subscribe(()=>{this.router.navigate(['/list-movies']);});
    
     //this.movieService.updatemovie(movie);
     //this.router.navigate(['/list-movie']);
  }
  
}
