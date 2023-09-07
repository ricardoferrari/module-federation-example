import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private user: string;

  constructor() {
    this.user = 'Anonimo';
  }

  public setUser(_user: string) {
    this.user = _user;
  }

  public getUser(): string {
    return this.user;
  }
}
