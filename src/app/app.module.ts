import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { loginView } from './views/login/login.component';
import { adminView } from './views/admin/admin/admin.component';
import { reportsView } from './views/admin/reports/reports.component';
import { newView } from './views/admin/new/new.component';
import { usersView } from './views/admin/users/users.component';

const appRoutes: Routes = [
    { path: '', component: loginView },
    { path: 'login', component: loginView },
    { path: 'admin', component: adminView, 
      children: [
        { path: '', redirectTo: 'reports', pathMatch: 'full' },
        { path: 'reports', component: reportsView },
        { path: 'new', component: newView },
        { path: 'users', component: usersView }
    ]},

];

@NgModule({
  declarations: [
    AppComponent,
    loginView,
    adminView,
    reportsView,
    newView,
    usersView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
