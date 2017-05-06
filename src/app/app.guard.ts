import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { SDK } from './app.sdk';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public sdk:SDK, private router: Router) {}

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        console.log(this.sdk.loggedIn());
        if (!this.sdk.loggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }

}