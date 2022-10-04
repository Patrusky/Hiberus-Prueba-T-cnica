import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users, CreateUserDto, UpdateUserDto} from '../models/users.model';
import { map, Observable } from "rxjs";
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private authUrl = `${environment.API_URL}auth/sign-up`;
  private userUrl = `${environment.API_URL}users`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {


  }
  createUser(dto: CreateUserDto): Observable<any> {
    console.log(dto);
    return this.http.post(this.authUrl, dto);

  }
  profile(token: string) {

    const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('Content-type', 'application/json');
    console.log(headers);
    return this.http.get<Users>(`${this.userUrl}/me`, { headers });

  }

  getAll(): Observable<any> {

    return this.http.get<Users>(`${this.userUrl}`);
  }
  getOne(id:string){
    return this.http.get<Users>(`${this.userUrl}/${id}`)
  }
  edit(id: string, dto: UpdateUserDto) {
    return this.http.put<Users>(`${this.userUrl}/${id}`, dto);
  }

  delete(id: string, dto: any) {
    return this.http.delete<boolean>(`${this.userUrl}/${id}`, dto);
  }
}
