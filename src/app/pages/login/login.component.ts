import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isMember : boolean = true
  buttonPressed : boolean = false
  newUser : User = {pseudo : "", email : "", password : "", firstname : "", lastname : ""}

  token : string | null = this._authService.getToken()
  registerForm : FormGroup
  loginForm : FormGroup

  constructor(private _fb : FormBuilder, private _httpClient : HttpClient, private _swaggerService : SwaggerApiService, private datePipe: DatePipe, private _authService : AuthService){
    this.registerForm = this._fb.group({
      pseudo : [[null], [Validators.required]],
      email : [[null], [Validators.required]],
      password : [[null], [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{5,}$/)]],
      firstname : [null],
      lastname : [null],
      birthdate : [[null]]
    })
    this.loginForm = this._fb.group({
      pseudo : [[null], [Validators.required]],
      password : [[null], [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{5,}$/)]]
    })
  }
  
  register() : void {
    const birthdate = this.registerForm.get('birthdate')?.value
    const formattedBirthdate = birthdate? this.datePipe.transform(birthdate, "yyyy-MM-dd")?? "" :  ""
    this.newUser = {
      pseudo: this.registerForm.get('pseudo')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      firstname: this.registerForm.get('firstname')?.value,
      lastname: this.registerForm.get('lastname')?.value,
      birthdate : formattedBirthdate
    }
    this._swaggerService.register(this.newUser).subscribe({
      next :(response) => {
        console.log('User registered :', response)
    },
      error : (error) => {
        console.error('Error registering user:', error)
    }})
  }

  login() : void {
    const loginInfo = {
      identifier : this.loginForm.get("pseudo")?.value,
      password : this.loginForm.get("password")?.value
    }
    this._swaggerService.login(loginInfo).subscribe({
      next : (response) => {
        console.log("User logged in :", response)
        this._authService.setToken(response.token)
    },
      error : (error) => {
        console.log("error : ", error)
    }})
  }

}
