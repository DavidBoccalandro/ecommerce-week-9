// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { LoginRequest } from '../interfaces/login.interface';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { IToken } from '../interfaces/token.interface';
// import { environment } from 'src/environments/environment';
// import { LocalStorageService } from './local-storage.service';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginService {
//   url: string = environment.url;
//   profile = new BehaviorSubject<IProfile>({
//     email: '',
//     exp: 0,
//     iat: 0,
//     sub: 0,
//     username: '',
//   });

//   constructor(
//     private http: HttpClient,
//     private localStorage: LocalStorageService,
//     private router: Router
//   ) {}

//   login(login: LoginRequest): Observable<IToken> {
//     return this.http.post<IToken>(`${this.url}/auth/login`, login);
//   }

//   // register(register: IRegister): Observable<ISignup> {
//   //   return this.http.post<ISignup>(`${this.url}/auth/signup`, register);
//   // }

//   logout() {
//     this.localStorage.removeItem('token');
//     this.localStorage.removeItem('refreshToken');
//     this.router.navigate(['']);
//   }
// }
