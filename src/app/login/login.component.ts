import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      'username': [null],
      'password': [null],
    })
  }

  login() {
    let user = this.loginForm.controls['username'].value;
    let pass = this.loginForm.controls['password'].value;
    this.auth.login(user, pass)
    if (localStorage.getItem('user') !== null) {
      this.router.navigate(['/myProfile']);
    }
  }
}
