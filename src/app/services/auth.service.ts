import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { Users } from '../models/users.model';
import { Observable } from "rxjs";
import { TokenService } from './token.service';

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

  profile() {
    let token = this.tokenService.getToken();
    console.log("AQUI TOKEN", token);
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`)
    .set('Content-type', 'application/json');

    return this.http.get<Users>(`${this.userUrl}/me`, {headers: headers});

  }


  /* loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.profile()),
    )
  } */
}
