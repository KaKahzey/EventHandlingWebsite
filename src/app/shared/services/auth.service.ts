import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token : string | null = null

  setToken(tokenReceived : string | null) : void {
    this._token = tokenReceived
  }

  getToken(): string | null {
    return this._token;
  }

}
