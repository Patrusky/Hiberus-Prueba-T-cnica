import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { Users } from '../models/users.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}auth`;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    console.log('servi',email, password)
    return this.http.post<Auth>(`${this.apiUrl}/log-in`, { email, password });

  }
  profile() {
    this.http.get<Users>(`${this.apiUrl}/profile`)
  }
}
