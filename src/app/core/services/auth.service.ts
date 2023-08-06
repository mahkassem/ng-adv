import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthCredentials } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APP_URI = environment.apiUrl;
  authApi = this.APP_URI + 'auth/login'
  constructor(private _http: HttpClient) { }

  login(credentials: AuthCredentials) {
    return this._http.post(this.authApi, credentials);
  }
}
