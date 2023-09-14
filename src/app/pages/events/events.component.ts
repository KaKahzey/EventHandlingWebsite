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
  eventToShow : Myevent = {
    id: 0, name: "", description: "", startDate: new Date(), endDate: new Date(), maxGuest: 1
  };

  constructor(private _swaggerApiService : SwaggerApiService){}

  ngOnInit() : void {
     this._swaggerApiService.displayEvents().subscribe({
      next : (response) => {
        console.log("It worked :", response)
        this.listEvents.push(...response)
      },
      error : (error) => {
        console.error(error)
      }
    })
    
    
  }

  sendEvent(event : Myevent) : void {
    const foundEvent = this.listEvents.find((e) => e.id === event.id);
  if (foundEvent) {
    this.eventToShow = foundEvent;
  }
  }

}
