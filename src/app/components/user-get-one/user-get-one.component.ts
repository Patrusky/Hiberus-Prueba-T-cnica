import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService} from 'src/app/services/users.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-get-one',
  templateUrl: './user-get-one.component.html',
  styleUrls: ['./user-get-one.component.scss']
})
export class UserGetOneComponent implements OnInit {

  users: Users[] = [];
  user: any;


  constructor(private usersService:UsersService, public route: ActivatedRoute, public router: Router ) { }

  ngOnInit(): void {

      let id = this.route.snapshot.params['id'];
      this.getUser(id);
  }
  getUser(id:string){
   this.usersService.getOne(id).subscribe((data)=>{
    this.user = data
    })
  }

  back(){
    this.router.navigate(['/users'])
  }
}
