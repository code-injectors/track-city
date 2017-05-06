import { Component, OnInit } from '@angular/core';
import { SDK } from './app.sdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(public sdk:SDK){}

    ngOnInit(){
        this.sdk.hideLoading =  true;
    }
}
