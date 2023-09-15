import { Component } from '@angular/core';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';
import { Myevent } from 'src/app/shared/models/myevent';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  listEvents : Myevent[] = []

  constructor(private _swaggerApiService : SwaggerApiService, private _eventService : EventService){
    this.displayEvents()
  }

  displayEvents() : void {
     this._swaggerApiService.displayEvents().subscribe({
      next : (response) => {
        console.log("List of events :", response)
        this.listEvents.push(...response)
      },
      error : (error) => {
        console.error(error)
      }
    })
    
    
  }

  sendEvent(event : Myevent) : void {
    const foundEvent = this.listEvents.find((e) => e.id === event.id)
    if(foundEvent) {
      this._eventService.setDisplayedEvent(foundEvent)
    }
  }

}
