import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
 {path: '', component: ImagesComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'login', component: LoginComponent},
 {path: 'profile', component: ProfileComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, ImagesComponent]
})
export class AppModule { }
