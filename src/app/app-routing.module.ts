import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ListMoviesComponent } from './list.movies/list.movies.component';
import { AddMovieComponent } from './add.movie/add.movie.component';
import { EditMovieComponent } from './edit.movie/edit.movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'movies', component:MoviesComponent
  },
  {
    path:'list-movies', component:ListMoviesComponent
  },
  {
    path:'edit-movies/:id', component:EditMovieComponent
  },
  {
    path:'add-movies', component:AddMovieComponent
  },
  {
    path:'register', component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
