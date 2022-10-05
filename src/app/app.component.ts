import { Component } from '@angular/core';
import { Users } from './models/users.model';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  profile: Users | null = null;
  constructor( private authService:AuthService){

  }


}
