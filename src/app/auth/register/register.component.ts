import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../registerService'; // Import your service

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hasSubmitted: boolean = false;

  get email() {
    return this.registerForm.get('email');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get password() {
    return this.registerForm.get('password');
  }

  constructor(private fb: FormBuilder, private router: Router, private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      email: [
        '',
        [Validators.required],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: [
        '',
        [Validators.required],
      ],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.hasSubmitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerService.registerUser(this.registerForm.value).subscribe(
        (response) => {          
          // Handle successful registration response
          console.log('Registration successful:', response);
          this.registerForm.reset();
          this.hasSubmitted = false;
        },
        (error) => {
          // Handle error in registration
          console.error('Registration failed:', error);
        }
      );
  
     
    } else {
    }
  }
}
