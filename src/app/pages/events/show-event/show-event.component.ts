import { Component, Input } from '@angular/core';
import { Myevent } from 'src/app/shared/models/myevent';
import { EventService } from 'src/app/shared/services/event.service';


@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent {

  event : Myevent | undefined = this._eventService.displayedEvent
  
  constructor(private _eventService : EventService){
    
  }

}

