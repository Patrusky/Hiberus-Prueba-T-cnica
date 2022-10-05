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
  hide = true;
  usersForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])


  })
  public get name() {
    return this.usersForm.get('name');
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.usersForm.controls[controlName].hasError(errorName);
    }


  constructor(private usersService:UsersService) { }


  ngOnInit(): void {
  }

  singIn(){
    this.usersService.createUser(this.usersForm.value).subscribe(data=>{
      alert('!Registrado con éxito¡. Ahora entra con nuevo perfil');
    }, err => {
      console.log("ERROR", err);
      alert('Hay un error. No se ha podido registrar')
    })
  }

}
