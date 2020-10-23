import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '' , redirectTo:'register' , pathMatch:'full'},
  {path: 'home' , canActivate:[AuthGuard] ,component:HomeComponent},
  {path: 'movies' ,canActivate:[AuthGuard] , component:MoviesComponent},
  {path: 'about' ,canActivate:[AuthGuard] , component:AboutComponent},
  {path: 'tv' ,canActivate:[AuthGuard] , component:TvComponent},
  {path: 'people' ,canActivate:[AuthGuard] , component:PeopleComponent},
  {path: 'register' , component:RegisterComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'moviesdetails/:type/:id',canActivate:[AuthGuard] , component:MoviesdetailsComponent},
  {path: '**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
