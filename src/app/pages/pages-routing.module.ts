import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ConnectedGuard } from '../shared/guards/connected.guard';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ShowEventComponent } from './events/show-event/show-event.component';

const routes: Routes = [
  {path : "events", component : EventsComponent},
  {path : "events/create-event", component : CreateEventComponent, canActivate: [ConnectedGuard]},
  {path : "events/show-event/:id", component : ShowEventComponent},
  {path : "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
