import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService} from 'src/app/services/users.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  user: Users[] = [];
  displayedColumns: string[] = ['name', 'surname', 'email'];

  constructor(
    private usersService:UsersService,
    private tokenService:TokenService,
     public router: Router) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data)=>{
      this.users = data.items;
    })
  }
  getUser(){
    /* this.usersService.getOne(id).subscribe((data)=>{
      this.user = data.items.id
    }) */
  }
  updateUser(){
    /* this.usersService.edit().subscribe((data)=>{
      this.id =data.items.id
    }) */
  }
  deleteUser(){
    /* this.usersService.delete(id) */
  }

  logout(){
    this.tokenService.singOut();
    this.router.navigate(['/'])
  }
}
