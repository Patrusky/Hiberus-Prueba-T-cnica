import { Component } from '@angular/core';
import { CreateUserDto } from './models/users.model';

//import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private usersService:UsersService){

  }

  createUser(){


    // console.log("EN APP", dto);
    // this.usersService.create(dto).subscribe(data=>{
    //   console.log(data);
    // })
  }
  /* login(){
    this.authService.login({email:'',password:'',})
    .subscribe((data: any)=>{
      console.log(data);
    })
  } */
}
