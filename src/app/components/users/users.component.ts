import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Users[] = [];


  constructor(private usersService:UsersService, public router: Router) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data)=>{
      this.users = data.items;
    })
  }

  logout(){
    this.router.navigate(['/'])
  }
}
