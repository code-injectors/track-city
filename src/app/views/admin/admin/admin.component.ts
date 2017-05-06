import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SDK } from './../../../app.sdk';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class adminView implements OnInit {

    links = [
        {
            title: 'Reports',
            url: 'reports',
            icon: ''
        },
        {
            title: 'Users',
            url: 'users',
            icon: ''
        }
    ]

    constructor(public sdk:SDK,public router:Router) { }

    ngOnInit() {
    }

    navigate(url){
        console.log(url);
        this.router.navigate(['/admin', {outlets:{'admin': url}}]);
    }

    logout(){
        this.sdk.logout();
        this.router.navigate(['/login']);
    }

}
