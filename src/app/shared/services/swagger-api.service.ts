import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginData } from '../models/loginData';
import { Myevent } from '../models/myevent';

@Injectable({
  providedIn: 'root'
})
export class SwaggerApiService {

  private _url : string = "https://localhost:7245/api/"
  private _urlRegister : string = 'https://localhost:7245/api/Auth/Register'
  private _urlLogin : string = "https://localhost:7245/api/Auth/Login"
  private _urlEvents : string = "https://localhost:7245/api/Activity/NextActivities"
  private _urlCreateEvent : string = "https://localhost:7245/api/Activity"

  constructor(private _httpClient : HttpClient) {

  }

  register(user : User) : Observable<any> {
    return this._httpClient.post(this._urlRegister, user)
  }

  login(user : LoginData) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user)
  }

  displayEvents() : Observable<any> {
    return this._httpClient.get(this._urlEvents)
  }

  createEvent(event : Myevent) : Observable<any> {
    return this._httpClient.post(this._urlCreateEvent, event)
  }

  deleteEvent(id : number | undefined) : Observable<any> {
    return this._httpClient.delete(this._urlCreateEvent + "/" + id)
  }

  updateEvent(id : number | undefined, event : Myevent) : Observable<any> {
    return this._httpClient.put(this._urlCreateEvent + "/" + id, event)
  }
}
