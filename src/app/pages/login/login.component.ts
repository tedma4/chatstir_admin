import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from "../auth.service"
import { Router } from '@angular/router';

interface Credentials { 
  email: string,
  password: string
}

@Component({
  selector: 'login',
  providers: [AuthService],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  public credentials: Credentials;
  public loginForm:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  
  constructor(fb:FormBuilder, public auth: AuthService, private router: Router) {
    this.loginForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  onSubmit(credentials):void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.auth.login({user: credentials})
      .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an auth_token key
        // if (data) {
          data => { 
            console.log(data)
            localStorage.setItem('auth_token', data.auth_token);
            localStorage.setItem('user', JSON.stringify(data.user));
            this.router.navigateByUrl('/dashboard')
           },
        // }
        error => console.log(error)
      )
      ;
    }
  }
}
