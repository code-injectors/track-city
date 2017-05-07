import { Component, OnInit } from '@angular/core';
//import { User } from './../../models/user';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-user',
    templateUrl: './municipality.component.html',
    styleUrls: ['./municipality.component.css']
})
export class municipalityDialog{
    //user:User;
    public dialogRef: MdDialogRef<municipalityDialog>;
    public roles:any;
    public users:any;

    constructor() {}

    ngOnInit() {
        //this.user = new User(
    }
}
