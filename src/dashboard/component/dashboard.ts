import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


  stats = [
    { title: 'Buyers', value: 533, change: 7.5, icon: 'fas fa-users' },
    { title: 'Sellers', value: 340, change: -24.5, icon: 'fas fa-user-tie' },
    { title: 'Traders', value: 560, change: 3.5, icon: 'fas fa-chart-line' },
    { title: 'Trade Volume', value: '45.6743', change: 53.5, icon: 'fas fa-layer-group' }
  ];

  tradingDisplayedColumns: string[] = [
    'symbol', 'buyQty', 'buyRate', 'sellRate',
    'sellQty', 'avg', 'high', 'low'
  ];

  biddingDisplayedColumns: string[] = [
    'lot', 'type', 'qty', 'base',
    'current', 'buyer', 'action'
  ];

  trading = Array(8).fill({
    symbol: 'Egg',
    buyQty: '13,761',
    buyRate: '42.67',
    sellRate: '42.67',
    sellQty: '15,761',
    avg: '43.14',
    high: '43.88',
    low: '42.45'
  });

  bidding = Array(8).fill({
    lot: 'PL-1023',
    type: 'Egg (40gm–46gm)',
    qty: '250g',
    base: 'Rs.49,900',
    current: 'Rs.42,800',
    buyer: 'ABC Eggs'
  });

}