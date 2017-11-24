import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      'username': [null],
      'email': [null],
      'password': [null],
    })
  }

  register() {

  }
}
