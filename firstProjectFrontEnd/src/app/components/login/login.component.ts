import { AuthStatusService } from './../../service/auth-status.service';
import { TokenService } from './../../service/token.service';
import { AuthService } from './../../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private AuthService : AuthService, 
    private  token: TokenService,
    private router: Router,
    private AuthStatusService: AuthStatusService

    ) { }

  ngOnInit(): void {
  }
  
 public form = {
  email : null,
  password : null,
}
public error : any ;
 onSubmit(){
   return this.AuthService.login(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   )
 }

 handleResponse(data){
    this.token.handle(data.access_token);
    this.AuthStatusService.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');

 }
 handleError(error:any){
   this.error = error.error.error;
 }
}
