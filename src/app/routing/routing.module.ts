import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/myProfile', pathMatch: 'full' },
  { path: 'myProfile', component: MyProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class RoutingModule { }
