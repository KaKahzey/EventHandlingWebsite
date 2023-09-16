import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { ButtonModule } from 'primeng/button';
import {CalendarModule } from 'primeng/calendar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PasswordModule
  ],
  providers: [
    DatePipe,
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
