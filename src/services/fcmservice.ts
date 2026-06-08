import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from '../environments/environment.development';
import { firebaseConfig } from '../environments/firebase.config';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { BaseResponse } from '../util/helper/base.response';
import { Observable } from 'rxjs';
import { WebConstants } from '../util/web.constants';

@Injectable({
  providedIn: 'root',
})
export class Fcmservice {
  
  public baseUrl: string = environment.BaseServiceUrl;
   
   constructor(public ajaxHelper: AjaxHelper) { }
             

  updateToken(payload: any): Observable<BaseResponse<any>> {
     
           
  
           return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.USER.UPDATE_TOKEN, payload);
        }
 
}
