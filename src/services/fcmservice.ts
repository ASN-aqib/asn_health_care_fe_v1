import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from '../environments/environment.development';
import { firebaseConfig } from '../environments/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class Fcmservice {
  
private messaging;

  constructor() {
    // Initialize Firebase using your environment configuration
    const app = initializeApp(firebaseConfig);
    this.messaging = getMessaging(app);
  }

  requestPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(this.messaging, { vapidKey: 'BGyrEyQa5Z8n37BQ2XxbPwLE_ZLvLBdTJvxQCN675w20oLe3Gmcy95c3uqFenmeq0-mlgAfgGXGOStDCnNcXtZs' })
          .then((currentToken) => {
            if (currentToken) {
              console.log('FCM Registration Token:', currentToken);
              // Send this token to your backend database to target this device
            } else {
              console.log('No registration token available. Request permission.');
            }
          })
          .catch((err) => {
            console.error('An error occurred while retrieving token: ', err);
          });
      } else {
        console.warn('Notification permission denied.');
      }
    });
  }

  listenForForegroundMessages() {
    onMessage(this.messaging, (payload) => {
      console.log('Foreground message received: ', payload);
      // Display this payload as an in-app banner, toast, or alert
      alert(`${payload.notification?.title}: ${payload.notification?.body}`);
    });
  }
}
