import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration  : Observable<any>
  register(user) {
    return this.http.post('http://127.0.0.1:8000/api/signup', user);
  }

  // Login
  login(user) {
    return this.http.post('http://127.0.0.1:8000/api/login', user);
  }

  // Access user profile
  profileUser() {
    return this.http.get('http://127.0.0.1:8000/api/user-profile');
  }
}
