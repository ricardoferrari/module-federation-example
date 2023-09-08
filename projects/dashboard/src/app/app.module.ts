import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    SharedLibModule
  ],
  providers: [SharedLibModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
