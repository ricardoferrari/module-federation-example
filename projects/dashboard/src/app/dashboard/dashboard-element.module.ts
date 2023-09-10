import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { SharedLibModule } from 'shared-lib';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ]
})
export class DashboardElementModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(DashboardComponent, {injector: this.injector});
    customElements.define('dashboard-element', ce);
  }
}
