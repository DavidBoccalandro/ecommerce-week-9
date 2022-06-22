import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../interfaces/login-request.interface';
import { LoginResponse } from '../interfaces/login-response.interface';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  url: string = environment.url;
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  login(login: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/users/login`, login).pipe(
      tap((res: LoginResponse) => {
        this.localStorage.setItem('token', res.data!.token);
        this.localStorage.setItem('user', JSON.stringify(res.data!.user));
        this.router.navigate(['home']);
      }),
      catchError((error: Response) => {
        if (error.status === 401) {
          throw 'Unauthorized: Email and/or Password invalid/s';
        } else {
          throw 'Internal server error';
        }
      })
    );
  }

  logout() {
    this.localStorage.removeItem('token');
    this.localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
