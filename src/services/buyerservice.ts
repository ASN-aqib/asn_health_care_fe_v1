import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { BaseResponse } from '../util/helper/base.response';
import { WebConstants } from '../util/web.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Buyerservice {
  
    public baseUrl: string = environment.BaseServiceUrl;
  
            constructor(public ajaxHelper: AjaxHelper) { }
        
  


      getAllLiveBidding(): Observable<BaseResponse<any>> {
           let url = this.baseUrl + WebConstants.API_URL.DASHBOARD.LIVE_BIDDING;
            
                return this.ajaxHelper.get(url);
       }
}
