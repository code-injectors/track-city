import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

import { AuthModule } from 'angular2-auth';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MaterialModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';

import { newDialog } from './dialogs/new/new.component';
import { editDialog } from './dialogs/edit/edit.component';

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

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
    declarations: [
        AppComponent,
        loginView,
        adminView,
        reportsView,
        usersView,
        newDialog, editDialog
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
        AuthGuard,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ],
    bootstrap: [AppComponent],
    schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents: [
        newDialog, editDialog
    ]
})
export class AppModule { }
