import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navigation: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  navigationHandler(title: string) {
    this.navigation = title;
  }

  logout() {
    this.loginService.logout();
  }
}
