import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class commentsDialog{
    public dialogRef: MdDialogRef<commentsDialog>;
    public reviews:any;
    constructor() { }

    ngOnInit() {
    }

}
