import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { editDialog } from './../../../dialogs/edit/edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersView implements OnInit {
    dialogRef: MdDialogRef<editDialog>;

    config: MdDialogConfig = {
        disableClose: false,
        data: {
          message: 'Jazzy jazz jazz'
        }
    };

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
