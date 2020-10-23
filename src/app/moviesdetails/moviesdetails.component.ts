
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {
  id:any;
  type:any;
  movieDetails:any;
  imgPrefix:string="https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute , private _MovieService:MovieService) { 
  this.type =  _ActivatedRoute.snapshot.paramMap.get('type');
  this.id =  _ActivatedRoute.snapshot.paramMap.get('id');
  _MovieService.getDetails(this.type , this.id).subscribe((data)=>{
    this.movieDetails = data;
  })
  }

  ngOnInit(): void {
  }

}
