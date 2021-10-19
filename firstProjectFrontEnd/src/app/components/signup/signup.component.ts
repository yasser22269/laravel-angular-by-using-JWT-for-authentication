import { AuthStatusService } from './../../service/auth-status.service';
import { TokenService } from './../../service/token.service';
import { AuthService } from './../../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

 public form = {
  name: null,
   email: null,
   password: null,
   password_confirmation: null
 };


 public error : any = [];
  constructor(
    private AuthService : AuthService,
    private token : TokenService,
    private router: Router,
    private AuthStatusService:AuthStatusService,
    ) { }
  onSubmit(){
    return this.AuthService.register(this.form).subscribe(
      data => this.handleResponse(data),
      error =>{
       this.handleError(error);
       console.log(error);
      }

    )
  }
 
  handleResponse(data){
     this.token.handle(data.access_token);
     this.AuthStatusService.changeAuthStatus(true);
     this.router.navigateByUrl('/profile');
  }

  handleError(error1){
    this.error = error1.error.errors;
  }
}
