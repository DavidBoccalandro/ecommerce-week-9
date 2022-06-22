import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoginResponse } from 'src/app/auth/interfaces/login-response.interface';
import { LoginService } from 'src/app/auth/services/login.service';
import { AppStateWithUser } from 'src/app/auth/store/reducer/user.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navigation: string = '';
  menuInfo!: LoginResponse;
  userSubscription!: Subscription;

  constructor(
    private loginService: LoginService,
    private store: Store<AppStateWithUser>
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.store.select('user').subscribe((data) => {
      this.menuInfo = data;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  navigationHandler(title: string) {
    this.navigation = title;
  }

  logout() {
    this.loginService.logout();
  }
}
