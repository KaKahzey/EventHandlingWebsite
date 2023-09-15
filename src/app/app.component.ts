import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'EventHandlingWebsite';
  isConnected : boolean = this.getState()

  constructor(private _authService : AuthService) {}

  getState() : boolean {
    return this._authService.getState()
  }
}
