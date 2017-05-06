import { Component } from '@angular/core';
import { SDK } from './app.sdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public sdk:SDK){}
}
