import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from 'src/app/constants/patterns';
import { Store } from '@ngrx/store';
import * as userActions from '../../store/actions/user.action';
import { LoginResponse } from '../../interfaces/login-response.interface';

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
    private localStorage: LocalStorageService,
    private store: Store
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.localStorage.checkUserLogged()) {
      let response: LoginResponse = {
        data: {
          token: this.localStorage.getItem('token')!,
          user: JSON.parse(this.localStorage.getItem('user')!),
        },
      };

      this.store.dispatch(userActions.loginActionSuccess({ user: response }));
    }
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: [
        '',
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
    });
  }

  getField(name: string) {
    return this.form.get(name);
  }

  login() {
    let user = {
      data: this.form.value,
    };

    this.store.dispatch(userActions.loginAction({ user }));
  }
}
