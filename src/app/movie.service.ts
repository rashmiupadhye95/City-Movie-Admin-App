import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MovieService {
movies=[];
  constructor(private http: HttpClient) { }


  private movieUrl = 'http://192.168.0.93:3000/api/movies';

  getMovies(){
    return this.movies
  }


  
    getRemoteMovies(): Observable<[]>{
        return this.http.get<[]>(this.movieUrl); 		
    }

    deleteRemoteMovie(movie){
      return this.http.delete(this.movieUrl+'/'+movie.id); 		
    }

    addRemoteMovie(movie):Observable<any>{
      return this.http.post(this.movieUrl,movie);
   }

    updateRemoteMovie(movie):Observable<any>{
      return this.http.put(this.movieUrl + "/"+movie.id,movie);
    }

    getRemoteMovieById(id):Observable<any>{
    return this.http.get<[]>(this.movieUrl + "/"+id);
    }
}

