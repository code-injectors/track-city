import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class loginView implements OnInit {

    constructor(public router:Router) { }

    ngOnInit() {
    }

    login(){

        this.router.navigate(['/admin']);
    }

}
