import { Component } from '@angular/core';
import { TokenStorage } from '../../util/token.storage';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  
  
  constructor(private tokenStorage:TokenStorage){


  }


}
