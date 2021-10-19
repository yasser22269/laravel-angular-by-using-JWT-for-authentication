import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  private loggedIn = new BehaviorSubject<boolean>(this.token.loggIn());
    AuthStatus = this.loggedIn.asObservable();
  constructor(
    private token :TokenService,
  ) { }

  changeAuthStatus(value){
    this.loggedIn.next(value);
  }
}
