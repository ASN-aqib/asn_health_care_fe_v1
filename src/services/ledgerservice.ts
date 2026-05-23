import { Injectable } from '@angular/core';
import { AjaxHelper } from '../util/helper/ajaxhelper';
import { environment } from '../environments/environment.development';
import { BaseResponse } from '../util/helper/base.response';
import { Observable } from 'rxjs';
import { WebConstants } from '../util/web.constants';

@Injectable({
  providedIn: 'root',
})
export class Ledgerservice {
  
     public baseUrl: string = environment.BaseServiceUrl;
  
     constructor(public ajaxHelper: AjaxHelper) { }
            
    
     getAll(transporterid:number): Observable<BaseResponse<any>> {
            let url = this.baseUrl + WebConstants.API_URL.LEDGER.FIND_ALL+"/"+transporterid;
            return this.ajaxHelper.get(url);
     }
    
}
