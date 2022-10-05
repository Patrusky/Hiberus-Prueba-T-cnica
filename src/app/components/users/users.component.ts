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
  displayedColumns: string[] = ['name', 'surname', 'email', 'actions'];

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
  visibilityUser(id:string){
    this.router.navigate(['/usergetone/', id]);
  }



  logout(){
    this.tokenService.singOut();
    this.router.navigate(['/logout'])
  }
}
