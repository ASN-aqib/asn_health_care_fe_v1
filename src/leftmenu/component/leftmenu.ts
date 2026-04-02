import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Authservice } from '../../auth/service/authservice';
import { TokenStorage } from '../../util/token.storage';
import { WebConstants } from '../../util/web.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leftmenu',
  imports: [MatToolbarModule,MatSidenavModule, CommonModule,
    MatIconModule,MatListModule,MatButtonModule,RouterModule],

  templateUrl: './leftmenu.html',
  styleUrl: './leftmenu.css',
})
export class Leftmenu {

   widthVal = 160;
   opened = true;
  isVisible = true;
  
  constructor(private authservice: Authservice, private tokenStorage:TokenStorage,
     public router: Router,
  ){



    this.isVisible = true;

  }

   menuItems: any[] =[
    {
      icon:'home',
      label:'Dashboard',
      route:'dasboard'
    },
    {
      icon:'User',
      label:'User',
      route:'user',
        subMenu: [
      { name: 'Web Apps', link: '/web' },
      { name: 'Mobile', link: '/mobile' }
    ]
    },
    {
      icon:'book',
      label:'Role',
      route:'role'
    },
    {
      icon:'rule',
      label:'Permissoin',
      route:'permission'
    },
    {
      icon:'help',
      label:'Statement',
      route:'statement'
    },
    {
      icon:'help',
      label:'Support',
      route:'support'
    },
     {
      icon:'logout',
      label:'logout',
      route:''
    }
  ];

   Click()
  {
        this.authservice.logout();
    //   this.tokenStorage.clearAll();
        this.router.navigateByUrl(WebConstants.WEB_URL.HOME);
  }


  closeNav()
  {
    if(this.opened)
    {// alert('10')
       this.widthVal = 60;
       this.opened = false;
       //this.isVisible = false;
       

    }
    else
    {
      // alert(this.opened);
      this.widthVal = 160;
      this.opened = true;
     // this.isVisible = true;
    }
    


  }

  handleClick(item:any, i:number)
  {

      alert(item.subMenu?.length);
      



  }
   onActionClick(item: any): void {
   
    console.log(item.label);
    if(item.label == 'logout')
    { 

      //this.authservice.logout();
  //    this.router.navigate([WebConstants.WEB_URL.HOME]);
      this.authservice.logout();
    //   this.tokenStorage.clearAll();
      this.router.navigateByUrl(WebConstants.WEB_URL.HOME);
      console.log("Logging Out")  
    }

    //  else if(item.label == 'Role')
    // { 
    //           this.router.navigate([WebConstants.WEB_URL.ROLE]);
      
    //  } 
    //  else if(item.label == 'User')
    // { 
    //           this.router.navigate([WebConstants.WEB_URL.USER]);
      
    //  }
     
    }
    
   

    
}
