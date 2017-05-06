import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { editDialog } from './../../../dialogs/edit/edit.component';
import { SDK } from './../../../app.sdk';
import { userFilter } from './../../../models/userFilter';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersView implements OnInit {
    query: userFilter;
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
}
