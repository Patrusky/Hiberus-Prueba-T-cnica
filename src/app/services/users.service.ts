import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users, CreateUserDto } from '../models/users.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private authUrl =`${environment.API_URL}auth/sign-up`;
  private userUrl =`${environment.API_URL}users`;

  constructor(private http: HttpClient) {


   }
   createUser(dto: CreateUserDto): Observable<any>{
    console.log(dto);
      return this.http.post(this.authUrl, dto);

  }

  getAll(dto: CreateUserDto){
    return this.http.get<Users[]>(this.userUrl);
}
}
