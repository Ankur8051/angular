import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './Expense/home/home.component';
import {ProfileComponent}from './Expense/profile/profile.component';
import {SettingsComponent} from './Expense/settings/settings.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

     
const routes: Routes = [
  {path :'firstpage',component:FirstpageComponent},
  {path :'expense',component:ExpenseComponent},
  {path :'home',component:HomeComponent},
  {path :'profile',component:ProfileComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
