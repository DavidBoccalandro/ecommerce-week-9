import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navigation: string = '';

  constructor() {}

  ngOnInit(): void {}

  navigationHandler(title: string) {
    this.navigation = title;
  }
}
