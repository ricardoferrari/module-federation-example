import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private user: BehaviorSubject<string>;

  constructor() {
    this.user = new BehaviorSubject('Anônimo');
  }

  public setUser(_user: string) {
    this.user.next(_user);
  }

  public getUserObservable(): Observable<string> {
    return this.user.asObservable();
  }
}
