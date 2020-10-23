import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { }

  getDetails(mediaType , id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=654f6984f7d7b12ad6fb63f9c42e947c&language=en-US`)
  }
  


}
