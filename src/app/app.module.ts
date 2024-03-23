import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { GameComponent } from './_components/game/game.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AdminComponent } from './_components/admin/admin.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    GameComponent,
    ProfileComponent,
    AdminComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
})

export class AppModule { }
