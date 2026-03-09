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
import { first } from 'rxjs';
import { Stats } from '../model/stats.model';
import { Sellerservice } from '../../services/sellerservice';
import { Dashboardservice } from '../../services/dashboardservice';


export interface tradingelements {
  
  transactionId:string;
  
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,MatPaginator,MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})


export class Dashboard implements OnInit    {
 
  
  public trading: any =[];

  public bidding: any =[];

  

  constructor(private profileService:ProfileService,private dashboarsService: Dashboardservice){}

  
 
 
  ngOnInit(): void {
 
    this.getprofiles();
    this.getAll();
    this.getLiveTrading();
   
    
  }
    
    

  public dataSource = new MatTableDataSource<tradingelements>();
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public  profiledata: any = [];
  //stats: Stats[] = [];
  filtered!: Object[];
  stats: any =[];
   pageSize = 10;
  pageIndex = 0;
  myChecked: boolean = true;



  // stats = [
  //   { title: 'Buyers', value: 533, change: 7.5, icon: 'fas fa-users' },
  //   { title: 'Sellers', value: 340, change: -24.5, icon: 'fas fa-user-tie' },
  //   { title: 'Traders', value: 560, change: 3.5, icon: 'fas fa-chart-line' },
  //   { title: 'Trade Volume', value: '45.6743', change: 53.5, icon: 'fas fa-layer-group' }
  // ];

  tradingDisplayedColumns: string[] = [
    'transactionId'  
  ];

  biddingDisplayedColumns: string[] = [
      'categoryname', 'buyingQuantity', 'buyingRate' ,'sellerQuantity', 'sellerRate',
      'high', 'low', 'createdDate', 'action'
  ];
 

  
 
  

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
        
             let tradevol = new Stats();
               tradevol.title = "Trade Vol";
               tradevol.value = trader.length;
               tradevol.change = 2.5;
               tradevol.icon = "fas fa-chart-line";
               this.stats.push(tradevol);

               

         });
  }


     ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;

  }  


     getAll(): void {
    
      this.dashboarsService.getAllLiveBidding()
        .pipe(first())
        .subscribe(response => {

      this.bidding = response
      this.dataSource =this.bidding;



        
         
      //   this.dataSource = new MatTableDataSource(this.reponsedata);
//   this.dataSource.paginator = this.paginator;
           
        


          //   // for (let item of this.filtered) {
          // //  for (let item of this.filtered) {
          //      for (let i: number = 0; i < 4; i++) {

          //      let stat = new Stats();
          //      stat.title = "Buyer";
          //      stat.value = 500;
          //      stat.change = 2.5;
          //      stat.icon = "fas fa-users";
          //      this.stats.push(stat);
          //     }
          //   console.log(this.stats);


            // this.dataSource.data =this.profiledata;
            // this.dataSource.paginator = this.paginator;

          // this.dataSource.paginator = this.paginator;
          // if (response && response.code === WebConstants.STATUS.CODE_SUCCESS) {
          //   this.parkingSpots = response.data;
          //   this.dataSource = new MatTableDataSource<unknown>(this.parkingSpots);
          //   this.dataSource.paginator = this.paginator;
          //   this.dataSource.sort = this.sort;
          //   //console.log("response ",response.data);
          // } else {
          //   this.toastrService.error(response.value, "Failed To Load Data!")
          // }
     });
    }

      onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    //this.loadUsers();
  }
 
  //     ngAfterViewInit(): void {
  //      this.changeDetectorRef.detectChanges();
  //  }

      // ngAfterViewChecked(): void {
      //    if (this.stats) {
      //     setTimeout(() => {
          
      //     }, 0);
      //     this.changeDetectorRef.detectChanges();
      //   }

      // }


      getLiveTrading()
      {
    
       this.dashboarsService.getAllLiveTrading()
        .pipe(first())
        .subscribe(response => {


         this.trading = response
     

               this.dataSource = new MatTableDataSource(this.trading);

      this.dataSource.paginator = this.paginator;
       

        });
      }
}