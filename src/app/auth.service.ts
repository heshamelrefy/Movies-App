import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs'
import { userData} from './currentUser'
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) { 
    if (localStorage.getItem("userData") != null ) {
      this.currentUsers.next(JSON.parse(localStorage.getItem("userData")));
    }

  }

currentUsers=new BehaviorSubject(null)

register(registerFormValue):Observable<any>
{
  return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',registerFormValue )
}
login(loginFormValue):Observable<any>
{
  return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',loginFormValue )
}

saveUserData(first_name,last_name , email,token)
{
  let user = new userData(first_name,last_name , email,token);
  localStorage.setItem("userData" , JSON.stringify(user))
  this.currentUsers.next(user) ;
  
}
logOut()
{
  this.currentUsers.next(null);
  localStorage.setItem("userData" , null)
  this._Router.navigate(["/login"]);
}
getTrendingMovies(mediaTybe):Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaTybe}/day?api_key=654f6984f7d7b12ad6fb63f9c42e947c`);
}
getTrendingTv(mediaTybe):Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaTybe}/day?api_key=654f6984f7d7b12ad6fb63f9c42e947c`);
}


}
