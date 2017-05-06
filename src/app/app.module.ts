import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

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
        { path: '', component: reportsView, outlet:'admin' },
        { path: 'reports', component: reportsView, outlet:'admin' },
        { path: 'new', component: newView, outlet:'admin' },
        { path: 'users', component: usersView, outlet:'admin' }
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
        RouterModule.forRoot(appRoutes),
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
