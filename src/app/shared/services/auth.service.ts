import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token : string | null = null
  private _user : string | undefined
  setToken(tokenReceived : string | null) : void {
    this._token = tokenReceived
  }

  getToken(): string | null {
    return this._token
  }

  setUser(loggedUserName : string) : void {
    this._user = loggedUserName
  }

  getUser() : string | undefined {
    return this._user
  }
  removeToken() : void {
    this._token = null
  }
}
