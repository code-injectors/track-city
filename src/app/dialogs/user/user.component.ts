import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class userDialog{
    user:User;
    public roles:any;
    public municipalities:any;

    constructor() {}

    ngOnInit() {
        //this.user = new User(
    }
}
