import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import { FormControl , FormGroup } from '@angular/forms';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router  ) { }

  loginForm:FormGroup;
  errorMessage:string;
  flag:boolean = false;
  getloginInfo(loginForm)
  {
    if (loginForm.valid == true) {
      this._AuthService.login(loginForm.value).subscribe((data)=>
      {
        if (data.message == 'success') {
          this._AuthService.saveUserData(data.user.first_name , data.user.last_name , data.user.email ,data.token)
          this._Router.navigate(['/home'])
        }
        else
        {
           
          this.flag = true;
          this.errorMessage =data.message;
        }
      })
    }
  }

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      'email': new FormControl(null , [Validators.email , Validators.required]),
      'password': new FormControl(null , [Validators.pattern(/^[A-Z]/) , Validators.required] ),
    })  ;
  }

}
