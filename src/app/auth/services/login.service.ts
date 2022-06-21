import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { LoginRequest } from '../interfaces/login.interface';
import { BehaviorSubject, Observable } from 'rxjs';
// import { IToken } from '../interfaces/token.interface';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  url: string = environment.url;
  profile = new BehaviorSubject<any>({
    email: '',
    exp: 0,
    iat: 0,
    sub: 0,
    username: '',
  });
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  login(login: any): Observable<any> {
    return this.http.post<any>(`${this.url}/users/login`, login);
  }

  logout() {
    this.localStorage.removeItem('token');
    this.localStorage.removeItem('refreshToken');
    this.router.navigate(['']);
  }
}
