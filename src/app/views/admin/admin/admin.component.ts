import { Component, OnInit } from '@angular/core';

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
            title: 'new',
            url: 'new',
            icon: ''
        },
        {
            title: 'users',
            url: 'users',
            icon: ''
        }
    ]

    constructor() { }

    ngOnInit() {
    }

}
