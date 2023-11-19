import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hasSubmitted: boolean = false;

  get username() {
    return this.registerForm.get('username');
  }
  get password() {
    return this.registerForm.get('password');
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: [
        '',
        [Validators.required],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: [
        '',
        [Validators.required],
      ],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.hasSubmitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.registerForm.reset();
      this.hasSubmitted = false;
    } else {
    }
  }
}
