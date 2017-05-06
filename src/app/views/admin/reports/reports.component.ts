import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { newDialog } from './../../../dialogs/new/new.component';
import { SDK } from './../../../app.sdk';
import { reportFilter } from './../../../models/reportFilter';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class reportsView implements OnInit {
    query: reportFilter;
    dialogRef: MdDialogRef<newDialog>;
    lat:Number = 41.08247;
    lng:Number = 23.5437952;
    zoom:Number = 16;

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
            {title: 'category', value: ''},
            {title: 'sort', value: ''});
        this.filter();
    }

    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: any) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng
      });
    }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }

    openDialog() {
      this.dialog.open(newDialog, this.config);
      this.dialogRef.afterClosed().subscribe(result => {
        this.dialogRef = null;
      });
    }
    
    markers: marker[] = [
      {
        lat: 51.673858,
        lng: 7.815982,
        label: 'A',
        draggable: true
      },
      {
        lat: 51.373858,
        lng: 7.215982,
        label: 'B',
        draggable: false
      },
      {
        lat: 51.723858,
        lng: 7.895982,
        label: 'C',
        draggable: true
      }
    ]

    filters: any[] = [
        {
            value: 'All'
        },
        {
            value: 'Specific filter'
        }
    ]

    filter(){
        
        console.log(this.query);
        this.sdk.getReports(this.query).subscribe(result => {
            console.log(result);
            this.reports = result.content;
        });
        //this.router.navigate(['/admin']);
    }
}

interface marker {
    lat: any;
    lng: any;
    label?: string;
    draggable?: boolean;
}
