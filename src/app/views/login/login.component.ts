import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SDK } from './../../app.sdk';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class loginView implements OnInit {

    constructor(public router:Router,public sdk:SDK) { }

    ngOnInit() {
    }

    login(email,password){

        this.sdk.hideLoading = false;
        this.sdk.login(email,password).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
        });
        //this.router.navigate(['/admin']);
    }

}
