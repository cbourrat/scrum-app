import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarModule } from './navbar';

import {RouterModule } from '@angular/router';


// Components
import { AppComponent } from './app.component';
import { QueteComponent } from './quete/quete.component';

// Services
import { QueteService } from './quete/quete.service';

// Routes
const ROUTES = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'quete',
    component: QueteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QueteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), // Add routes to the app
    NavbarModule
  ],
  bootstrap: [AppComponent],
  providers: [QueteService]
})
export class AppModule { }
