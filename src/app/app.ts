import { Component, OnInit, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TokenStorage } from '../util/token.storage';
import { CommonModule } from '@angular/common';
import { Leftmenu } from '../leftmenu/component/leftmenu';
 import { NgxSpinnerModule } from 'ngx-spinner';
import { Fcmservice } from '../services/fcmservice';
import { firebaseConfig } from '../environments/firebase.config';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, Leftmenu, CommonModule,NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit  {

    private messaging: any;

  constructor(  public tokenStorage: TokenStorage, private fcmService: Fcmservice){

   // console.log("sotrage ", tokenStorage.getToken());

  }

   ngOnInit() {
    //   const app = initializeApp(firebaseConfig);
    // this.messaging = getMessaging(app);
    // this.requestPermission();

    // onMessage(this.messaging, (payload) => {
    //   alert(JSON.stringify(payload));
    //   // ...
    // });

      
  }


 

  //  requestPermission() {
  //   console.log('Requesting permission...');
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === 'granted') {
  //       console.log('Notification permission granted.');
  //       getToken(this.messaging, {
  //         vapidKey: "BGyrEyQa5Z8n37BQ2XxbPwLE_ZLvLBdTJvxQCN675w20oLe3Gmcy95c3uqFenmeq0-mlgAfgGXGOStDCnNcXtZs",
  //       })
  //         .then((currentToken: string) => {
  //           if (currentToken) {
  //             console.log(currentToken);
  //           } else {
  //             console.log(
  //               'No registration token available. Request permission to generate one.'
  //             );
  //           }
  //         })
  //         .catch((err: any) => {
  //           console.log(err);
  //         });
  //     }
  //   });
  // }

  
  
  
  protected readonly title = signal('asn_health_care_fe_v1');
}
