import { Component, Input } from '@angular/core';
import { Myevent } from 'src/app/shared/models/myevent';


@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent {

  @Input() displayedEvent : Myevent | undefined
  
  constructor(){
    
  }
  ngOnInit() : void {
    console.log(this.displayedEvent);
    
  }

}

