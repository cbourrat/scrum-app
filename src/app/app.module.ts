import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarModule } from './navbar';
//import { RouterModule } from '@angular/router';

import { routing } from './app.routing';



// Components
import { AppComponent } from './app.component';
import { QueteComponent } from './quete/quete.component';
import { AlertComponent } from './_directives/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { AuthGuard } from './_guards/index';

// Services
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { QueteService } from './_services/quete.service';

@NgModule({
  declarations: [
    AppComponent,
    QueteComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    routing
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    QueteService
  ]
})
export class AppModule { }
