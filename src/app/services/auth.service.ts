import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpErrorResponse,HttpStatusCode  } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { Users } from '../models/users.model';
import { Observable } from "rxjs";
import { TokenService } from './token.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}auth`;
  private userUrl =`${environment.API_URL}users`;

  constructor(private http: HttpClient, private tokenService:TokenService) { }

  login(email: string, password: string): Observable<any> {
    console.log('servi',email, password)
    return this.http.post<Auth>(`${this.apiUrl}/log-in`, { email, password })
    .pipe(
     tap(rta => this.tokenService.setToken(rta.accessToken))
    )
  }

  getProfile() {
    return this.http.get<Users>(`${this.userUrl}/me`);

  }


}


