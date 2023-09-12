import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';


const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", redirectTo : "/" },
  { path : "notfound", component : NotfoundComponent },
  { path : "pages", component : PagesComponent, loadChildren : () => import("./pages/pages.module").then(m => m.PagesModule) },


  { path : "**", redirectTo : "/notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
