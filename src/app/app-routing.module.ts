import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyMoviesComponent } from './user/my-movies/my-movies.component';
import { MyFavoritesComponent } from './user/my-favorites/my-favorites.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'genres', component: GenresComponent
  },
  {
    path: 'genre/:id', component: MovieListComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'mymovies', component: MyMoviesComponent
  },
  {
    path: 'favorites', component: MyFavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
