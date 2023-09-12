import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SwaggerApiService {

  url : string = "https://localhost:7245/api/"

  constructor(private _httpClient : HttpClient) {

  }

  getAll() : Observable<User[]> {
    return this._httpClient.get<User[]>(this.url)
  }
}
