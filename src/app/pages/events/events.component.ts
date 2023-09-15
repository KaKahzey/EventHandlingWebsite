import { Component } from '@angular/core';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';
import { Myevent } from 'src/app/shared/models/myevent';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  listEvents : Myevent[] = []
  eventToShow : Myevent | undefined

  constructor(private _swaggerApiService : SwaggerApiService){
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
    this.eventToShow = this.listEvents.find((e) => e.id === event.id);
    console.log(this.eventToShow);
    
  }

}
