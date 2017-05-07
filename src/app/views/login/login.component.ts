import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SDK } from './../../app.sdk';

import { Guest } from './../../models/guest';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class loginView implements OnInit {
    guest:Guest;

    constructor(public router:Router,public sdk:SDK) { }

    ngOnInit() {
        this.guest = new Guest('','');
    }

    login(){

        this.sdk.hideLoading = false;
        this.sdk.login(this.guest.email,this.guest.password).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
            this.router.navigate(['/admin']);
        });
    }

}
