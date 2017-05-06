import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { editDialog } from './../../../dialogs/edit/edit.component';
import { SDK } from './../../../app.sdk';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersView implements OnInit {
    dialogRef: MdDialogRef<editDialog>;

    users = [];

    config: MdDialogConfig = {
        disableClose: false,
        data: {
          message: 'Jazzy jazz jazz'
        }
    };

    constructor(public sdk:SDK) { }

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

    filter(){

        this.sdk.getUsers().subscribe(result => {
            console.log(result);
            this.users = result;
        });
        //this.router.navigate(['/admin']);
    }
}
