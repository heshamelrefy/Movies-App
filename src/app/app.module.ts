import { RegisterComponent } from './register/register.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';

import { NotfoundComponent } from './notfound/notfound.component';

import { MoviesComponent } from './movies/movies.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TvComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    
    MoviesComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    MoviesdetailsComponent,
    SeemorePipe,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
