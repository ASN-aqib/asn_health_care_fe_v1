import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AjaxHelper } from '../../util/helper/ajaxhelper';
import { BaseResponse } from '../../util/helper/base.response';
import { Observable } from 'rxjs';
import { WebConstants } from '../../util/web.constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

     public baseUrl: string = environment.BaseServiceUrl;
  
     constructor(public ajaxHelper: AjaxHelper) { }


      getAllProfile(): Observable<BaseResponse<any>> {
               let url = this.baseUrl + WebConstants.API_URL.PROFILE.FIND_ALL;
           
               return this.ajaxHelper.get(url);
      }


     addProfile(payload: any): Observable<BaseResponse<any>> {
   
          console.log("add role",payload);

         return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.PROFILE.ADD, payload);
      }
}
