import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {SearchPipe} from '../search.pipe'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  num:number=1;
  trendingMovies:object[];
  trendingTv:object[];
  term:string;
  name:any
  imgPrefix:string="https://image.tmdb.org/t/p/w500";
  constructor(private _AuthService:AuthService) {

    _AuthService.getTrendingMovies('movies').subscribe((data)=>{
      this.trendingMovies = data.results.slice(0,10);
    })

   _AuthService.getTrendingTv('tv').subscribe((data)=>{
     this.trendingTv = data.results ;
   })
   
   }
   
  ngOnInit(): void {
  }

}
