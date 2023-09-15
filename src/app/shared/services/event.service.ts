import { Injectable } from '@angular/core';
import { Myevent } from '../models/myevent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  displayedEvent : Myevent | null = null
  
  setDisplayedEvent(eventToDisplay : Myevent) : void {
    this.displayedEvent = eventToDisplay
  }
  getDisplayedEvent() : Myevent | null{
    return this.displayedEvent
  }
}
