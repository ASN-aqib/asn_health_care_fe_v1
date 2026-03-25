import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class Loaderservice {
 
  busyRequestCount = 0
   constructor(private spinnerService:NgxSpinnerService) { }

  show() {
 
      console.log('loadin...')
    this.busyRequestCount++;
    this.spinnerService;
    this.spinnerService.show(undefined,
      {
        type:'ball-scale-ripple',
        bdColor:'rgba(0, 0, 0, 0.8)',
        color:' #0f6d6f',
        size:'medium'
      })
  }
  hide() {
    
       this.busyRequestCount--;
    if(this.busyRequestCount <=0){
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
     
  }
}