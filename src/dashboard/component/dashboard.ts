import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { userElement } from '../../user/component/user';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Userservice } from '../../user/service/userservice';
import { ProfileService } from '../../profile/service/profile';
import { first, Observable, Subscription, switchMap, timer } from 'rxjs';
import { Stats } from '../model/stats.model';
import { Sellerservice } from '../../services/sellerservice';
import { Dashboardservice } from '../../services/dashboardservice';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Onlineusers } from '../onlinedialog/onlineusers/onlineusers';
import { Useractivityservice } from '../../services/useractivityservice';
import { subscribe } from 'node:diagnostics_channel';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../environments/firebase.config';


export interface tradingelements {
  
  transactionId:string;
  quantity:number;
  price:number;
  buyername:string;
  sellername:string;
  categoryname:string;

}

export interface biddingelements {
  
  categoryname:string;
  buyingQuantity:number;
  buyingRate:number;
  sellerQuantity:number;
  sellerRate:number;
  high:number;
  low:number;
  createdDate:string

  
}




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,MatPaginator,MatPaginatorModule,
    MatTableModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})


export class Dashboard implements OnInit    {
 
  private messaging: any;
  public trading: any =[];

  public bidding: any =[];
  public selling: any =[];
   users = [
    { id: 1, name: 'Ali', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Ahmed', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Sara', role: 'Manager', status: 'Active' }
  ];



  constructor(private profileService:ProfileService,private dashboarsService: Dashboardservice,
              private dialog: MatDialog ,private userActivityService:Useractivityservice
  ){}

  
 
 
  ngOnInit(): void {
 
    this.getprofiles();
    this.getAllSellers();
    this.getAllOnlineUsers();
    this.getAllBuyer();
    this.onMessage();
    this.requestPermission();
    }
    
    

  public dataSource = new MatTableDataSource<tradingelements>();
  public dataSource1 = new MatTableDataSource<biddingelements>();
  public dataSource2 = new MatTableDataSource<biddingelements>();


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild("paginator") paginator!: MatPaginator;
  @ViewChild("paginator1") paginator1!: MatPaginator;
  @ViewChild("paginator1") paginator2!: MatPaginator;

  public  profiledata: any = [];
  //stats: Stats[] = [];
  filtered!: Object[];
  stats: any =[];
  online: any =[];
  pageSize = 10;
  pageIndex = 0;
  myChecked: boolean = true;

 

  tradingDisplayedColumns: string[] = [
    'transactionId' ,'categoryname', 'quantity' ,'price' ,'buyername' ,'sellername' , 'transactionStatus', 'createdDate',
  ];

  biddingDisplayedColumns: string[] = [
     'FullName', 'category_name', 'quantity', 'price' ,
      //'sellerQuantity', 'sellerRate',
      'created_date',
      // 'action'
  ];
 
    sellerDisplayedColumns: string[] = [
     'seller_name', 'category_name', 'quantity', 'sell_price' ,
      //'sellerQuantity', 'sellerRate',
      'created_date',
      // 'action'
  ];
 


  onMessage()
  {
    
      const app = initializeApp(firebaseConfig);
    
      this.messaging = getMessaging(app);
     onMessage(this.messaging, (payload) => {
      alert(JSON.stringify(payload));
      // ...
    });

  }


  
   requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(this.messaging, {
          vapidKey: "BGyrEyQa5Z8n37BQ2XxbPwLE_ZLvLBdTJvxQCN675w20oLe3Gmcy95c3uqFenmeq0-mlgAfgGXGOStDCnNcXtZs",
        })
          .then((currentToken: string) => {
            if (currentToken) {
              console.log(currentToken);
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
    });
  }



 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }


    getAllOnlineUsers()
    {
      
     this.userActivityService.getAll()
          .pipe(first())
          .subscribe(response => {

         this.online = response

         console.log("online" ,this.online)

         
         });
  }


   openDialog(): void {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.data = {
      tableDataSource: this.online
    };

    const dialogRef = this.dialog.open(Onlineusers, {
      width: '900px',
      height: '600px',// Optional: set width, height, or other config options
     // data: { this.bidding }, // Optional: pass data to the dialog
     data: this.online
    });

    // Optional: Subscribe to the afterClosed() observable to get data back when the dialog closes
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle data returned from the dialog here
    });
  }
  

  getprofiles()
  {
    
   this.profileService.getAllProfile()
        .pipe(first())
        .subscribe(response => {
    
          this.profiledata = response

          console.log("==== profile Data ==========");
          console.log(this.profiledata);
          console.log("==============");


           var buyer = this.profiledata.filter((profile: any) => profile.profile_type_id == 1);
           var seller = this.profiledata.filter((profile: any) => profile.profile_type_id == 2);
           var trader = this.profiledata.filter((profile: any) => profile.profile_type_id == 3);
         

          console.log("==== buyer Data ==========");
          console.log(buyer);
          console.log("==============");

  
            

             let stat = new Stats();
               stat.title = "Buyer";
               stat.value = buyer.length;
               stat.change = 2.5;
               stat.icon = "fas fa-users";
               this.stats.push(stat);

                console.log(stat);

             let statsell = new Stats();
               statsell.title = "Seller";
               statsell.value = seller.length;
               statsell.change = 2.5;
               statsell.icon = "fas fa-user-tie";
               this.stats.push(statsell);

            let statetrader = new Stats();
               statetrader.title = "Trader";
               statetrader.value = trader.length;
               statetrader.change = 2.5;
               statetrader.icon = "fas fa-chart-line";
               this.stats.push(statetrader);
        
            //  let tradevol = new Stats();
            //    tradevol.title = "Trade Vol";
            //    tradevol.value = trader.length;
            //    tradevol.change = 2.5;
            //    tradevol.icon = "fas fa-chart-line";
            //    this.stats.push(tradevol);

               

         });
  }

 getAllBuyer(): void {
    
      this.dashboarsService.getAllLiveBuyer()
        .pipe(first())
        .subscribe(response => {

      this.bidding = response
      //this.dataSource1 =this.bidding;
      console.log("Buyers only ",this.bidding);

       this.dataSource1 = new MatTableDataSource(this.bidding);
       this.dataSource1.paginator = this.paginator1;
    
        
        });
    }
 


     getAllSellers(): void {
    
      this.dashboarsService.getAllLiveSeller()
        .pipe(first())
        .subscribe(response => {

      this.selling = response
      //this.dataSource1 =this.bidding;
      console.log("Seller",this.selling);

       this.dataSource2 = new MatTableDataSource(this.selling);
       this.dataSource2.paginator = this.paginator2;
       this.getLiveTrading();  
        
     
     });
    }

 
 
 

    ngAfterViewInit() {
      // Assign paginators to their respective data sources
      this.dataSource.paginator = this.paginator;
      this.dataSource1.paginator = this.paginator1;
    }

    getLiveTrading()
    {
    
       this.dashboarsService.getAllLiveTrading()
        .pipe(first())
        .subscribe(response => {


         this.trading = response

         console.log("trading",this.trading);
         this.dataSource = new MatTableDataSource(this.trading);
         this.dataSource.paginator = this.paginator;
       

       });
   }

   ngOnDestroy() {
      
    }
}