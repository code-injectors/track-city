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
            title: 'New report',
            url: 'new',
            icon: ''
        },
        {
            title: 'Users',
            url: 'users',
            icon: ''
        }
    ]

    constructor() { }

    ngOnInit() {
    }

    navigate(url){
        this.navigate(['admin/,(view:url)']);
    }

}
