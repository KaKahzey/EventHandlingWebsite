import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [
  
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ],
  
})
export class SharedModule { }
