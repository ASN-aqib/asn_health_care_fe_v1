import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { BaseResponse } from '../util/helper/base.response';
import { WebConstants } from '../util/web.constants';

@Injectable({
  providedIn: 'root',
})
export class TransporterService {
  
   public baseUrl: string = environment.BaseServiceUrl;
    
       constructor(public ajaxHelper: AjaxHelper) { }

      getAllTransporters(): Observable<BaseResponse<any>> {
         let url = this.baseUrl + WebConstants.API_URL.TRANSPORTER.FIND_ALL;
                  
        return this.ajaxHelper.get(url);
        }
       
       
       addTransporter(payload: any): Observable<BaseResponse<any>> {
       
         console.log("add role",payload);
       
              return this.ajaxHelper.post(this.baseUrl + WebConstants.API_URL.TRANSPORTER.ADD, payload);
        }
}
