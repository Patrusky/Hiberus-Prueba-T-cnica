import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string = "";
    password: string = "";

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.email, this.password).subscribe((rta) =>{
      console.log('token',rta);
    }, (err: any) => {
      console.log("ERROR", err);
    })
  }


}
