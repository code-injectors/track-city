import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

import { AuthModule } from 'angular2-auth';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MaterialModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';

import { reportDialog } from './dialogs/report/report.component';
import { userDialog } from './dialogs/user/user.component';

import { SDK } from './app.sdk';

import { RouterModule, Routes } from '@angular/router';

import { loginView } from './views/login/login.component';
import { adminView } from './views/admin/admin/admin.component';
import { reportsView } from './views/admin/reports/reports.component';
import { usersView } from './views/admin/users/users.component';

import { AuthGuard } from './app.guard';

const appRoutes: Routes = [
    { path: '', component: loginView },
    { path: 'login', component: loginView },
    { path: 'admin', component: adminView, canActivate: [AuthGuard], 
      children: [
        { path: '', component: reportsView, outlet:'admin', canActivate: [AuthGuard] },
        { path: 'reports', component: reportsView, outlet:'admin', canActivate: [AuthGuard] },
        { path: 'users', component: usersView, outlet:'admin', canActivate: [AuthGuard] }
    ]},

];

@NgModule({
    declarations: [
        AppComponent,
        loginView,
        adminView,
        reportsView,
        usersView,
        reportDialog, userDialog
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AuthModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBQcqNcYHtG1ukvDGWPpVoht7SfFSAqWRc'
        })
    ],
    providers: [
        SDK,
        AuthGuard
    ],
    bootstrap: [AppComponent],
    schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents: [
        userDialog, reportDialog
    ]
})
export class AppModule { }
