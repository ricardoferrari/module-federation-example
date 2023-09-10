import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedLibModule } from 'shared-lib';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [SharedLibModule],
  bootstrap: [DashboardComponent], // Remove o bootstrap e cria manualmente
})

export class AppModule {}

