import { Component } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  public user: string = 'Anônimo'
  constructor(
    private sharedService: SharedLibService
  ) {
    this.sharedService.getUserObservable().subscribe( value => {
      this.user = value;
      console.log('Atribuiu', value);
    });
    setTimeout(() => {
      this.sharedService.setUser('Haroldo');
      console.log('Disparou');
    }, 7000);
  }

}
