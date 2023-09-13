import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SwaggerApiService {

  url : string = "https://localhost:7245/api/"
  urlRegister : string = 'https://localhost:7245/api/Auth/Register'

  constructor(private _httpClient : HttpClient) {

  }


  register(dataForm : any) : Observable<any> {
    return this._httpClient.post(this.urlRegister, dataForm)
  }

  update(id : number, user : User) : Observable<User> {
    return this._httpClient.put<User>(this.url+id, user);
  }

  delete(id : number) : Observable<User> {
    return this._httpClient.delete<User>(this.url+id);
  }
}
