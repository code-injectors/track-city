import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class adminView implements OnInit {
    showMenu:boolean=true;

    constructor() { }

    ngOnInit() {
    }

    toggleMenu(){
        this.showMenu != this.showMenu;
    }

}
