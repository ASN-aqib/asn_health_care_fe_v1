import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatButtonModule,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


   menuItems: any[] =[
    {
      icon:'home',
      label:'Home',
      route:'home'
    },
    {
      icon:'User',
      label:'User',
      route:'User'
    },
    {
      icon:'book',
      label:'Role',
      route:'Role'
    },
    {
      icon:'rule',
      label:'Permissoin',
      route:'Permission'
    },
    {
      icon:'help',
      label:'Support',
      route:'support'
    }
  ];
}
