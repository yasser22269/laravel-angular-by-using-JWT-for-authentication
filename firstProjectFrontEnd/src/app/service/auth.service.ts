import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://127.0.0.1:8000/api';
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

  sendPasswordResetLink(data) {
    return this.http.post(`http://127.0.0.1:8000/api/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
}
