import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
// import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from 'src/app/constants/patterns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    // private loginService: LoginService,
    private localStorage: LocalStorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private jwtHelperService: JwtHelperService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: [
        '',
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
    });
  }

  // login() {
  //   this.loginService.login(this.form.value).subscribe(
  //     (result) => {
  //       this.localStorage.setItem('token', result.accessToken);
  //       this.loginService.profile.next(
  //         this.jwtHelperService.decodeToken(result.accessToken)
  //       );
  //       this.localStorage.setItem('refreshToken', result.refreshToken);
  //       this.router.navigate(['home']);
  //     },
  //     () => {
  //       this.snackBar.open('Email and/or Password invalid', 'Retry', {
  //         duration: 3000,
  //       });
  //     }
  //   );
  // }

  getField(name: string) {
    return this.form.get(name);
  }
}
