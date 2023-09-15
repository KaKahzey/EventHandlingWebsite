import { Injectable } from '@angular/core';
import { Myevent } from '../models/myevent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  displayedEvent : Myevent | undefined
  
  constructor() { }
}
