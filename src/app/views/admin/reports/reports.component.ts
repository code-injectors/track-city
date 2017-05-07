import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { reportDialog } from './../../../dialogs/report/report.component';
import { SDK } from './../../../app.sdk';
import { reportFilter } from './../../../models/reportFilter';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class reportsView implements OnInit {
    query: reportFilter;
    dialogRef: MdDialogRef<reportDialog>;
    lat:Number = 41.08247;
    lng:Number = 23.5437952;
    zoom:Number = 16;

    categories = [];
    reports = [];

    config: MdDialogConfig = {
        disableClose: false,
        data: {
          message: 'Jazzy jazz jazz'
        }
    };

    constructor(public sdk:SDK,public dialog: MdDialog) { }

    ngOnInit() {
        this.query = new reportFilter(
            {title: 'title', value: ''},
            {title: 'status', value: ''},
            {title: 'category.id', value: ''},
            {title: 'sort', value: ''});
        this.initFilters();
        this.filter();
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
    
    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    openDialog() {
        this.dialogRef = this.dialog.open(reportDialog, this.config);
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
    
    sort = [
        {
            name: 'Up votes',
            value: 'upVotes'
        },
        {
            name: 'Down votes',
            value: 'downVotes'
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
}

interface marker {
    lat: any;
    lng: any;
    label?: string;
    draggable?: boolean;
}
