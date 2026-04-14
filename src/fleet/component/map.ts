 
import { Component, inject } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule, MapDirectionsService } from '@angular/google-maps';
import { map } from 'rxjs';

@Component({
  selector: 'app-map',
  imports: [CommonModule,RouterModule, GoogleMapsModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {

    center: google.maps.LatLngLiteral = {lat: 24.86103, lng: 24.86103};
  zoom = 4;

  private mapDirectionsService = inject(MapDirectionsService);

  readonly directionsResults$ = this.mapDirectionsService.route({
    destination: {lat: 24.88588, lng: 67.15022},
    origin: {lat: 24.86103, lng: 67.06954},
    travelMode: google.maps.TravelMode.DRIVING,
  }).pipe(map(response => response.result));
    
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
