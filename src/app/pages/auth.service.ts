import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import {Router} from "@angular/router"

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) {}

  login(credentials) {
    return this.http.post('http://localhost:3000/sessions', credentials)
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