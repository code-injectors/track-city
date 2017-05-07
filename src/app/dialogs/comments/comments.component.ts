import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { SDK } from './../../app.sdk';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class commentsDialog{
    public dialogRef: MdDialogRef<commentsDialog>;
    public reviews:any;
    constructor(public sdk:SDK) { }

    ngOnInit() {
    }
    
    toggleComment(id){
        this.sdk.hideLoading =  false;
        this.sdk.toggleComment(id).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
        });
    }
    

}
