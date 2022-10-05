import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string = "";
    password: string = "";
    hide = true;

  constructor(
    private authService:AuthService,
    private TokenService:TokenService,
    public router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.email, this.password).subscribe(rta =>{
      console.log('token1',rta.accessToken);
      this.TokenService.setToken(rta.accessToken);
      this.router.navigate(['/users'])
      alert('Estas logueado')
    }, (err: any) => {
      console.log("ERROR", err)
    })
  }



}
