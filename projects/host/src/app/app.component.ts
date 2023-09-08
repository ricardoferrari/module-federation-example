import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'host';
  user = 'anonimo';

  @ViewChild('placeHolder', { read: ViewContainerRef })
   viewContainer!: ViewContainerRef;

   constructor(
    private router: Router,
    private sharedService: SharedLibService
   ) {
      this.sharedService.getUserObservable().subscribe( user => this.user = user)
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.sharedService.setUser('Ricardo');
      console.log('Disparou');
    }, 5000);
  }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }

  async load(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });

    this.viewContainer.createComponent(m.PainelComponent);
}
}
