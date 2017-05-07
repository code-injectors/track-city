import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AgmCoreModule } from 'angular2-google-maps/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';

import { MaterialModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';

import { reportDialog } from './dialogs/report/report.component';
import { userDialog } from './dialogs/user/user.component';
import { municipalityDialog } from './dialogs/municipality/municipality.component';
import { commentsDialog } from './dialogs/comments/comments.component';

import { SDK } from './app.sdk';

import { RouterModule, Routes } from '@angular/router';

import { loginView } from './views/login/login.component';
import { adminView } from './views/admin/admin/admin.component';
import { reportsView } from './views/admin/reports/reports.component';
import { municipalitiesView } from './views/admin/municipalities/municipalities.component';
import { usersView } from './views/admin/users/users.component';

import { AuthGuard } from './app.guard';

const appRoutes: Routes = [
    { path: '', component: loginView },
    { path: 'login', component: loginView },
    { path: 'admin', component: adminView, canActivate: [AuthGuard], 
      children: [
        { path: '', component: reportsView, outlet:'admin', canActivate: [AuthGuard] },
        { path: 'reports', component: reportsView, outlet:'admin', canActivate: [AuthGuard] },
        { path: 'municipalities', component: municipalitiesView, outlet:'admin', canActivate: [AuthGuard] },
        { path: 'users', component: usersView, outlet:'admin', canActivate: [AuthGuard] }
    ]},

];

@NgModule({
    declarations: [
        AppComponent,
        loginView,
        adminView,
        reportsView,
        municipalitiesView,
        usersView,
        reportDialog, userDialog, municipalityDialog, commentsDialog
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBQcqNcYHtG1ukvDGWPpVoht7SfFSAqWRc'
        })
    ],
    providers: [
        SDK,
        AuthGuard,
        SebmGoogleMap
    ],
    bootstrap: [AppComponent],
    schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents: [
        userDialog, reportDialog, municipalityDialog, commentsDialog
    ],
    exports: [
        RouterModule
    ]
})
export class AppModule { }
