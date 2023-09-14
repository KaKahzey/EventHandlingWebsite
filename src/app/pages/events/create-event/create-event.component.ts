import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Myevent } from 'src/app/shared/models/myevent';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  newEvent : Myevent = {
    name : "",
    description : "",
    startDate : new Date(),
    endDate : new Date(),
    maxGuest : 1
  }

  eventForm : FormGroup
  
  constructor(private _fb : FormBuilder, private _httpClient : HttpClient, private _swaggerService : SwaggerApiService, private datePipe: DatePipe, private _authService : AuthService){
    this.eventForm = this._fb.group({
      name : [null, [Validators.required]],
      description : [null, [Validators.required]],
      startDate : [null, [Validators.required]],
      endDate : [null, [Validators.required]],
      maxGuest : [null, [Validators.required]]
    })
  }

  create() : void {
    this.newEvent = this.eventForm.value
    this._swaggerService.createEvent(this.newEvent).subscribe({
      next :(response) => {
        console.log('Event created :', response)
    },
      error : (error) => {
        console.error('Error creating event:', error)
    }})
  }

}
