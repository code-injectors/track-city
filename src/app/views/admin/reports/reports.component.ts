import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { newDialog } from './../../../dialogs/new/new.component';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class reportsView implements OnInit {
    dialogRef: MdDialogRef<newDialog>;
    lat:Number = 41.08247;
    lng:Number = 23.5437952;
    zoom:Number = 16;

    config: MdDialogConfig = {
        disableClose: false,
        data: {
          message: 'Jazzy jazz jazz'
        }
    };

    constructor(public dialog: MdDialog) { }

    ngOnInit() {
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

    reports: any[] = [
      {
          title: 'test1',
          description: 'description1 sal;kjflk;aglkjhklhj',
          longitude: 8577865,
          latitude: 85758765,
          category: 'dummy',
          creator: 'tzinos',
          thumb_up: 120,
          thumb_down: 22,
      },
      {
          title: 'test2',
          description: 'description1 sal;kjflk;aglkjhklhj',
          longitude: 8577865,
          latitude: 85758765,
          category: 'dummy',
          creator: 'tzinos',
          thumb_up: 79,
          thumb_down: 8,
      },
      {
          title: 'test3',
          description: 'description1 sal;kjflk;aglkjhklhj',
          longitude: 8577865,
          latitude: 85758765,
          category: 'dummy',
          creator: 'tzinos',
          thumb_up: 8,
          thumb_down: 4,
      },
    ]

    filters: any[] = [
        {
            value: 'All'
        },
        {
            value: 'Specific filter'
        }
    ]
}

interface marker {
    lat: any;
    lng: any;
    label?: string;
    draggable?: boolean;
}
