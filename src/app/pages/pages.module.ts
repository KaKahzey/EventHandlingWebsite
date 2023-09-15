import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ShowEventComponent } from './events/show-event/show-event.component';
import { UpdateEventComponent } from './events/update-event/update-event.component';


@NgModule({
  declarations: [
    PagesComponent,
    EventsComponent,
    LoginComponent,
    CreateEventComponent,
    ShowEventComponent,
    UpdateEventComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PagesModule { }
