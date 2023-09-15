import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-connected',
  templateUrl: './navbar-connected.component.html',
  styleUrls: ['./navbar-connected.component.scss']
})
export class NavbarConnectedComponent {
  constructor(private _authService : AuthService, private _router : Router){
  }
  
  displayUser() : string | undefined {
    return this._authService.getUser()
  }

  logout() : void {
    this._authService.removeToken()
    localStorage.clear()
    this._router.navigateByUrl("/")
    
  }
}
