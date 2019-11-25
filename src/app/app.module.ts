//angular component
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//our own
import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header/header.component';

//3rd party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { LoginComponent } from './login/login.component';
import { MyMoviesComponent } from './user/my-movies/my-movies.component';
import { MyFavoritesComponent } from './user/my-favorites/my-favorites.component';

//attributes
@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HeaderComponent,
    MovieListComponent,
    HomeComponent,
    MovieCardComponent,
    LoginComponent,
    MyMoviesComponent,
    MyFavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //component (controller + view) will be run as the main program
})
export class AppModule { }
