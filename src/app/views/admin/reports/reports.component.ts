import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class reportsView implements OnInit {

  lat:Number = 41.08247;
  lng:Number = 23.5437952;
  zoom:Number = 16;

  constructor() { }

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
    },
    {
        title: 'test2',
        description: 'description1 sal;kjflk;aglkjhklhj',
        longitude: 8577865,
        latitude: 85758765,
        category: 'dummy',
        creator: 'tzinos',
    },
    {
        title: 'test3',
        description: 'description1 sal;kjflk;aglkjhklhj',
        longitude: 8577865,
        latitude: 85758765,
        category: 'dummy',
        creator: 'tzinos',
    },
  ]
}

interface marker {
    lat: any;
    lng: any;
    label?: string;
    draggable?: boolean;
}
