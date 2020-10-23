import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false;
  constructor(private _AuthService:AuthService) { 
    this._AuthService.currentUsers.subscribe((data)=>
    {
      if (data != null) {
        this.isLogin = true;
      }
      else
      {
        this.isLogin = false;
      }
    })
  }

  logOut()
  {
    this._AuthService.logOut();
  }

  ngOnInit(): void {
  }

}
