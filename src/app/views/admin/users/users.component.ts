import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { userDialog } from './../../../dialogs/user/user.component';
import { SDK } from './../../../app.sdk';
import { userFilter } from './../../../models/userFilter';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersView implements OnInit {
    query: userFilter;
    dialogRef: MdDialogRef<userDialog>;

    users = [];

    config: MdDialogConfig = {
        disableClose: false,
        data: {
            message: 'Jazzy jazz jazz'
        }
    };

    constructor(public sdk:SDK,public dialog: MdDialog) { }

    ngOnInit() {
        this.query = new userFilter(
            {title: 'title', value: ''},
            {title: 'role.name', value: ''},
            {title: 'sort', value: ''});
        this.filter();
    }

    filters: any[] = [
        {
            value: 'All'
        },
        {
            value: 'Specific filter'
        }
    ]

    roles: any[] = [ 
        {
            title: 'Super User',
            value: 'SUPER_USER'
        },
        {
            title: 'Admin',
            value: 'MUNICIPALITY_ADMIN'
        },
        {
            title: 'Employee',
            value: 'EMPLOYEE'
        },
        {
            title: 'Client',
            value: 'CLIENT'
        }
    ]

    filter(){
        
        console.log(this.query);
        this.sdk.hideLoading = false;
        this.sdk.getUsers(this.query).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
            this.users = result;
        });
        //this.router.navigate(['/admin']);
    }

    editUser(){
        this.dialogRef = this.dialog.open(userDialog, this.config);
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
}
