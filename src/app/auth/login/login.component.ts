import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hasSubmitted: boolean=false;

  get username(){ return this.loginForm.get('username'); }
  get password(){ return this.loginForm.get('password'); }

  constructor(private fb: FormBuilder, private router : Router) {
    this.loginForm = this.fb.group({
      username : ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
      password : ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    this.hasSubmitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginForm.reset();
      this.hasSubmitted = false;
    }
    else{
    }
  }

}