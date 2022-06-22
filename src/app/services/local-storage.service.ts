import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorage = localStorage;

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }

  checkUserLogged() {
    let token = this.getItem('token');
    let user = this.getItem('user');
    if (token && user) {
      return true;
    } else {
      return false;
    }
  }
}
