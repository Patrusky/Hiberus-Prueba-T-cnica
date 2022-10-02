import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  username:string ='';
  lastName: string ='';
  email:string = '';
  password:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
