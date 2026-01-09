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

@Component({
  selector: 'app-leftmenu',
  imports: [RouterOutlet,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatListModule,MatButtonModule,RouterModule],

  templateUrl: './leftmenu.html',
  styleUrl: './leftmenu.css',
})
export class Leftmenu {


  constructor(private authservice: Authservice, private tokenStorage:TokenStorage,
     public router: Router,
  ){}

   menuItems: any[] =[
    {
      icon:'home',
      label:'Home',
      //route:'dasboard'
    },
    {
      icon:'User',
      label:'User',
      route:'user'
    },
    {
      icon:'book',
      label:'Role',
      route:'role'
    },
    {
      icon:'rule',
      label:'Permissoin',
      route:'Permission'
    },
    {
      icon:'help',
      label:'Support',
      route:'support'
    },
     {
      icon:'logout',
      label:'logout',
      route:'login'
    }
  ];


   onActionClick(item: any): void {
   
    console.log(item.label);
    if(item.label == 'logout')
    { 
       

        this.authservice.logout();
         this.tokenStorage.clearAll();
       this.router.navigate([WebConstants.WEB_URL.HOME]);

 
      
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
