import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'host';

  @ViewChild('placeHolder', { read: ViewContainerRef })
   viewContainer!: ViewContainerRef;

   constructor(
    private router: Router,
   ) {}

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
