import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CheckboxModule, DataTableModule, SharedModule, ButtonModule, DataListModule, DataScrollerModule, DialogModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/primeng';
import { RoutingModule } from './routing/routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthService } from './services/auth.service';
import { MyEventsComponent } from './my-profile/my-events/my-events.component';
import { EventService } from './my-profile/my-events/event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyEventDialogComponent } from './my-profile/my-events/my-event-dialog/my-event-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    MyProfileComponent,
    MyEventsComponent,
    MyEventDialogComponent
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
    RoutingModule,
    DataListModule,
    DataScrollerModule,
    DialogModule,
    BrowserAnimationsModule

  ],
  providers: [
    AuthService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
