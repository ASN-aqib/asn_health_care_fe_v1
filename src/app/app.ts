import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TokenStorage } from '../util/token.storage';
import { CommonModule } from '@angular/common';
import { Leftmenu } from '../leftmenu/component/leftmenu';
 import { NgxSpinnerModule } from 'ngx-spinner';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, Leftmenu, CommonModule,NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(  public tokenStorage: TokenStorage){

   // console.log("sotrage ", tokenStorage.getToken());

  }

  
  
  
  protected readonly title = signal('asn_health_care_fe_v1');
}
