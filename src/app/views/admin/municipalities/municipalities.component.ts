import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { municipalityDialog } from './../../../dialogs/municipality/municipality.component';
import { SDK } from './../../../app.sdk';
import { municipalityFilter } from './../../../models/municipalityFilter';

import { SebmGoogleMap } from 'angular2-google-maps/core';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  entryComponents: [SebmGoogleMap],
  styleUrls: ['./municipalities.component.css']
})
export class municipalitiesView implements OnInit {
    @ViewChild(SebmGoogleMap) map: SebmGoogleMap
    query: municipalityFilter;
    dialogRef: MdDialogRef<municipalityDialog>;
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
        this.query = new municipalityFilter(
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
        this.dialogRef = this.dialog.open(municipalityDialog, this.config);
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
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
