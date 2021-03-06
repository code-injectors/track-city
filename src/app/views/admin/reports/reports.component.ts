import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { reportDialog } from './../../../dialogs/report/report.component';
import { reportFilter } from './../../../models/reportFilter';
import { commentsDialog } from './../../../dialogs/comments/comments.component';

import { SebmGoogleMap } from 'angular2-google-maps/core';
import { SDK } from './../../../app.sdk';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  entryComponents: [SebmGoogleMap],
  styleUrls: ['./reports.component.css']
})
export class reportsView implements OnInit {
    @ViewChild(SebmGoogleMap) map: SebmGoogleMap
    query: reportFilter;
    dialogRef: MdDialogRef<reportDialog>;
    dialogCommentsRef: MdDialogRef<commentsDialog>;
    lat:Number = 41.08247;
    lng:Number = 23.5437952;
    zoom:Number = 16;

    categories = [];
    reports = [];

    config: MdDialogConfig = {
        disableClose: false,
    };

    constructor(public sdk:SDK,public dialog: MdDialog) { }

    ngOnInit() {
        this.query = new reportFilter(
            {title: 'title', value: ''},
            {title: 'status', value: ''},
            {title: 'category.id', value: ''},
            {title: 'sort', value: ''});
        this.sdk.toolbarTitle = 'Reports';
        this.sdk.hideFab = false;
        this.initFilters();
        this.filter();
        this.map.triggerResize();
    }

    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: any) {
        /*
        this.markers.push({
          lat: $event.coords.lat,
          lng: $event.coords.lng
        });
        */
    }

    openDialog() {
        this.dialogRef = this.dialog.open(reportDialog, this.config);
        this.dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.dialogRef = null;
        });
    }

    openCommentsDialog(reviews) {
        this.dialogCommentsRef = this.dialog.open(commentsDialog, this.config);
        this.dialogCommentsRef.componentInstance.reviews = reviews;
        this.dialogCommentsRef.afterClosed().subscribe(result => {
            console.log(result);
            this.dialogCommentsRef = null;
        });
    }
    
    sort = [
        {
            name: 'Date',
            value: 'createdAt'
        },
        {
            name: 'Status',
            value: 'status'
        },
        {
            name: 'Category',
            value: 'category'
        }
    ]

    status = [
        {
            name: 'New',
            value: 'NEW'
        },
        {
            name: 'Pending',
            value: 'PENDING'
        },
        {
            name: 'Resolved',
            value: 'RESOLVED'
        },
        {
            name: 'Stand by',
            value: 'STAND_BY'
        },
        {
            name: 'All',
            value: ''
        }
    ]

    filter(){
        
        console.log(this.query);
        this.sdk.hideLoading =  false;
        this.sdk.getReports(this.query).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
            this.reports = result.content;
        });
    }
    initFilters(){
        
        console.log(this.query);
        this.sdk.hideLoading =  false;
        this.sdk.getCategories().subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
            this.categories = result.content;
        });
    }

    rejectReport(id){
        console.log(id);
        this.sdk.hideLoading =  false;
        this.sdk.rejectReport(id).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
        });
    }
    acceptReport(id){
        console.log(id);
        this.sdk.hideLoading =  false;
        this.sdk.acceptReport(id).subscribe(result => {
            this.sdk.hideLoading =  true;
            console.log(result);
        });
    }

    changeHeight(map){
        console.log(map);
    }
}

interface marker {
    lat: any;
    lng: any;
    label?: string;
    draggable?: boolean;
}
