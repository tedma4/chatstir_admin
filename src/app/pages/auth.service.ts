import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router"

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private url = "http://localhost:3000"
  constructor(private http: Http, private router: Router) {}

  login(credentials) {
    return this.http.post(this.url + '/sessions', credentials)
      .map(function(res) {
        return res.json()
      });
  }
  loggedIn() {
    return localStorage.auth_token && localStorage.auth_token.length > 1;
  }
  logout() {
    localStorage.removeItem('auth_token'); 
    this.router.navigateByUrl('/login')
  }
}
