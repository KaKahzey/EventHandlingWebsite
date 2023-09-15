import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Myevent } from 'src/app/shared/models/myevent';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EventService } from 'src/app/shared/services/event.service';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent {
  newEvent : Myevent | null = this._eventService.displayedEvent

  eventForm : FormGroup
  
  constructor(private _fb : FormBuilder, private _httpClient : HttpClient, private _swaggerService : SwaggerApiService, private datePipe: DatePipe, private _authService : AuthService, private _router : Router, private _eventService : EventService){
    this.eventForm = this._fb.group({
      name : [this.newEvent?.name, [Validators.required]],
      description : [this.newEvent?.description, [Validators.required]],
      startDate : [this.newEvent?.startDate, [Validators.required]],
      endDate : [this.newEvent?.endDate, [Validators.required]],
      maxGuest : [this.newEvent?.maxGuest, [Validators.required]]
    })
  }

  update() : void {
    this.newEvent = this.eventForm.value
    if(this.newEvent){
      this._swaggerService.updateEvent(this.newEvent.id,this.newEvent).subscribe({
        next :(response) => {
          console.log('Event modified :', response)
          this._router.navigateByUrl("/pages/events")
        },
        error : (error) => {
          console.error('Error modifying event:', error)
        }})
    }
    
  }

}
