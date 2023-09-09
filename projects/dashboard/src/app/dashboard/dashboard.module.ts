import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibModule } from 'shared-lib';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedLibModule
  ]
})
export class DashboardModule { }
