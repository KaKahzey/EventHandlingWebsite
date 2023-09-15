import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
