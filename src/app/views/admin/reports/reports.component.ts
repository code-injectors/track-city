import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class reportsView implements OnInit {
  googleMaps = {
      lat: 51.507351,
      lng: -0.127758,
      zoom: 9,
      api: "AIzaSyBQcqNcYHtG1ukvDGWPpVoht7SfFSAqWRc"
  }

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
}

interface marker {
    lat: any;
    lng: any;
    label?: string;
    draggable?: boolean;
}
