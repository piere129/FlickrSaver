import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';


import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';



const appRoutes: Routes = [
  {path: '*', component: LoginComponent},
 {path: '', component: HomeComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'login', component: LoginComponent},
 {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
 {path: 'collection', component: CollectionComponent/*, canActivate: [AuthGuard]*/},
 {path: 'collection/:id', component: ImageDetailsComponent/*, canActivate: [AuthGuard]*/},
 {path: 'dashboard', component: ImagesComponent,  canActivate: [AuthGuard]}


];

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CollectionComponent,
    DashboardComponent,
    HomeComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
