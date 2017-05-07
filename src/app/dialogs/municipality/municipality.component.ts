import { Component, OnInit } from '@angular/core';
//import { User } from './../../models/user';

@Component({
    selector: 'app-user',
    templateUrl: './municipality.component.html',
    styleUrls: ['./municipality.component.css']
})
export class municipalityDialog{
    //user:User;
    public roles:any;
    public users:any;
    public municipalities:any;

    constructor() {}

    ngOnInit() {
        //this.user = new User(
    }
}
