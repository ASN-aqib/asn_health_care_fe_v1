import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Dashboard } from '../dashboard/component/dashboard';
import { TokenStorage } from '../util/token.storage';
import { CommonModule } from '@angular/common';
import { tokenToString } from 'typescript';
import { Leftmenu } from '../leftmenu/component/leftmenu';
import { Login } from '../login/component/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, Leftmenu, Login, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(  public tokenStorage: TokenStorage){

   // console.log("sotrage ", tokenStorage.getToken());

  }

  
  
  
  protected readonly title = signal('asn_health_care_fe_v1');
}
