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
    roles = [];

    sort = [
        {
            name: 'First name',
            value: 'firstName'
        },
        {
            name: 'Last name',
            value: 'lastName'
        },
        {
            name: 'Email',
            value: 'email'
        },
        {
            name: 'Municipality',
            value: 'municipality.name'
        },
        {
            name: 'Role',
            value: 'role.name'
        }
    ]

    config: MdDialogConfig = {
        disableClose: false
    };

    constructor(public sdk:SDK,public dialog: MdDialog) { }

    ngOnInit() {
        this.query = new userFilter(
            {title: 'firstName', value: ''},
            {title: 'role.id', value: ''},
            {title: 'sort', value: ''});
        this.sdk.toolbarTitle = 'Users';
        this.sdk.hideFab = false;
        this.initFilters();
        this.filter();
    }

    initFilters(){
        
        this.sdk.hideLoading =  false;
        this.sdk.getRoles().subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
            this.roles = result.content;
        });
    }

    filter(){
        
        console.log(this.query);
        this.sdk.hideLoading = false;
        this.sdk.getUsers(this.query).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
            this.users = result;
        });
    }

    editUser(){
        this.dialogRef = this.dialog.open(userDialog, this.config);
        this.dialogRef.componentInstance.roles = this.roles;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
}
