import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUser } from "../models/LoginUser";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  authUrl = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  public login(loginUser: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authUrl + 'login', loginUser);
  }
}
