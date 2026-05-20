import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { BaseResponse } from '../util/helper/base.response';
import { Observable } from 'rxjs';
import { WebConstants } from '../util/web.constants';

@Injectable({
  providedIn: 'root',
})
export class Dashboardservice {

  
      public baseUrl: string = environment.BaseServiceUrl;

          constructor(public ajaxHelper: AjaxHelper) { }
      

       getAllLiveBuyer(): Observable<BaseResponse<any>> {
         let url = this.baseUrl + WebConstants.API_URL.BUYER.FIND_ALL;
          
              return this.ajaxHelper.get(url);
     }


      getAllLiveSeller(): Observable<BaseResponse<any>> {
         let url = this.baseUrl + WebConstants.API_URL.SELLER.FIND_ALL;
          
              return this.ajaxHelper.get(url);
     }

     getAllLiveTrading(): Observable<BaseResponse<any>> {
         let url = this.baseUrl + WebConstants.API_URL.DASHBOARD.LIVE_TRADING;
          
              return this.ajaxHelper.get(url);
     }
  
}
