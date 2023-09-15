import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user : string | undefined
  constructor(private _authService : AuthService){
    this.displayUser()
  }

  displayUser() : string | undefined {
    return this._authService.getUser()
  }
}
