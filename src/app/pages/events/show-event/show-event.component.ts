import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Myevent } from 'src/app/shared/models/myevent';
import { EventService } from 'src/app/shared/services/event.service';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';


@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent {

  event : Myevent | null = this._eventService.getDisplayedEvent()
  idUser : number = Number(localStorage.getItem("id"))
  constructor(private _eventService : EventService, private _swaggerApi : SwaggerApiService, private _router : Router){ }

  deleteEvent() : void {
    if(this.event){
      this._swaggerApi.deleteEvent(this.event.id).subscribe({
        next : (response) => {
          console.log("Event deleted : ", response)
        },
        error : (error) => {
          console.error("Issue deleting : ", error)
        }
      })
      this._router.navigateByUrl("pages/events")
    }
  }

}

