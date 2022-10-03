import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/models/users.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  usersForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

  singIn(){
    this.usersService.createUser(this.usersForm.value).subscribe(data=>{
      console.log('Creado',data);
    }, err => {
      console.log("ERROR", err);
    })
  }

}
