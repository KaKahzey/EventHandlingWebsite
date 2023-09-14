import { Component, Input } from '@angular/core';
import { Myevent } from 'src/app/shared/models/myevent';


@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent {

  @Input() event : Myevent = {
    id : 0, name : "", description : "", startDate : new Date(), endDate : new Date(), maxGuest : 1
  }
  
}
