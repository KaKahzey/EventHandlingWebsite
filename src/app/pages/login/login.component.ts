import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isMember : boolean = true
  buttonPressed : boolean = false

  users : User[] = [
    
  ]

  registerForm : FormGroup
  loginForm : FormGroup

  constructor(private _fb : FormBuilder, private _httpClient : HttpClient, private _swagger : SwaggerApiService){
    this.registerForm = this._fb.group({
      pseudo : [, [Validators.required]],
      email : [, [Validators.required]],
      password : [, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{5,}$/)]],
      firstname : [null],
      lastname : [null],
      birthdate : []
    })
    this.loginForm = this._fb.group({
      pseudo : [, [Validators.required]],
      password : [, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{5,}$/)]]
    })
  }

  register() : void {
    const formData = this.registerForm.value
    this._swagger.register(formData).subscribe((response) => {
      console.log('User registered successfully:', response)
    },
    (error) => {
      console.error('Error registering user:', error)
    })
  }

  login() : void {

  }

}
