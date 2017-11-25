import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CheckboxModule, DataTableModule, SharedModule, ButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/primeng';
import { RoutingModule } from './routing/routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CheckboxModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    ReactiveFormsModule,
    MenubarModule,
    RoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
