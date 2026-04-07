 
import { Component } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  imports: [CommonModule,RouterModule, GoogleMapsModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {

    display: any;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
 mapOptions: google.maps.MapOptions = {
    center: { lat: 40, lng: -20 },
    zoom: 4,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
    scrollwheel: false
  };
  center: google.maps.LatLngLiteral = { lat: 40.73061, lng: -73.935242 };
  
  markers = [
    { lat: 40.73061, lng: -73.935242 },
    { lat: 40.74988, lng: -73.968285 }
  ];

     move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

     moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
