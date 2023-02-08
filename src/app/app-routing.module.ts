import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ExpertDetailsComponent } from './expert-details/expert-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { SignupComponent } from './signup/signup.component';
import { UserNonExpertComponent } from './user-non-expert/user-non-expert.component';

const routes: Routes = [
  {path: '', component:HomeComponent, title:"Home"},
  {path:'signup', children:[
    {path:'',component:SignupComponent, title:"Register"},
    {path:'email', component:ConfirmEmailComponent, title:"Email "}, 
    {path:'user_info', component:UserNonExpertComponent, title:"User Info"},
    {path:'expert_info', component:ExpertDetailsComponent, title:"Expert Info"},
    {path:'setpassword', component:SetPasswordComponent, title:"Set Password"},
  ]},
  {path:'login', component:LoginComponent, title:"Login"},





  {path:"**", component:ErrorPageComponent, title:"Error page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
