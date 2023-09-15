import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { NavbarConnectedComponent } from './shared/components/navbar-connected/navbar-connected.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NavbarConnectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
