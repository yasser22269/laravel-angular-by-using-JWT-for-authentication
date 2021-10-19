import { TokenService } from './../../service/token.service';
import { AuthStatusService } from './../../service/auth-status.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn : boolean;
  constructor(
    private AuthStatusService : AuthStatusService,
    private router: Router,
    private token : TokenService,
  ) { }

  ngOnInit(): void {
    this.AuthStatusService.AuthStatus.subscribe(value =>this.loggedIn  =value );
  }

  logout(e : MouseEvent){
      e.preventDefault();
      this.AuthStatusService.changeAuthStatus(false);
      console.log(this.loggedIn);
      this.token.remove();
      this.router.navigateByUrl('login');
  }

}
