import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedLibModule } from 'shared-lib';
// import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // DashboardModule,
    AppRoutingModule
  ],
  providers: [SharedLibModule],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
