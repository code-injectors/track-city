import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersView implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    filters: any[] = [
        {
            value: 'All'
        },
        {
            value: 'Specific filter'
        }
    ]

    users: any[] = [
        {
            firstName: 'test1',
            lastName: 'description1 sal;kjflk;aglkjhklhj',
            email: 8577865,
        },
        {
            firstName: 'test1',
            lastName: 'description1 sal;kjflk;aglkjhklhj',
            email: 8577865,
        },
        {
            firstName: 'test1',
            lastName: 'description1 sal;kjflk;aglkjhklhj',
            email: 8577865,
        }
    ]
}
