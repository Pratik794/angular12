import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRoutes } from './authRouting';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {RegisterService  } from "./registerService";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    authRoutes,
    ReactiveFormsModule,
  ],
  providers: [
    RegisterService // Add your service to providers
  ],
})
export class AuthModuleModule { }
