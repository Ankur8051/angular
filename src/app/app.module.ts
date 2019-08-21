import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './Expense/home/home.component';
import { SettingsComponent } from './Expense/settings/settings.component';
import { ProfileComponent } from './Expense/profile/profile.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
