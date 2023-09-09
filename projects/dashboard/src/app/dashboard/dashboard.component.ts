import { Component } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
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
