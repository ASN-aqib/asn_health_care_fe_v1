 
import { Component, Inject, inject } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMap, GoogleMapsModule, MapDirectionsRenderer, MapDirectionsService } from '@angular/google-maps';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnyMxRecord } from 'dns';
import { readonly } from '@angular/forms/signals';

@Component({
  selector: 'app-ordermap',
  imports: [CommonModule,RouterModule, GoogleMapsModule],
  templateUrl: './ordermap.html',
  styleUrl: './ordermap.css',
})
export class Ordermap {
 
  directionsResults$ = new BehaviorSubject<
    google.maps.DirectionsResult | undefined
  >(undefined);
  constructor(public dialogRef: MatDialogRef<Ordermap> , @Inject(MAT_DIALOG_DATA) public data: any){

    
    this.go();
  }

  private mapDirectionsService = inject(MapDirectionsService);


    center: google.maps.LatLngLiteral = {lat: 24.86103, lng: 24.86103};
  zoom = 4;
 
  go()
{
  
  console.log("======================");
  console.log(this.data.pickup_lat);
  console.log(this.data.pickup_lng);
   this.makeRoute(this.data.pickup_lat,this.data.pickup_lng)
}

  makeRoute(pickuplat: any, pickuplng:any)
  {
     this.mapDirectionsService.route({
    destination: {lat: parseFloat(pickuplat), lng: parseFloat(pickuplng)},
    origin: {lat: 24.86103, lng: 67.06954},
    travelMode: google.maps.TravelMode.DRIVING,
  }).pipe(map(response => response.result)).subscribe((res) => {
        this.directionsResults$.next(res);
       });
  }
 
 
    
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

