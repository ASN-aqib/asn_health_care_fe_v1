import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { userElement } from '../../user/component/user';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Userservice } from '../../user/service/userservice';
import { ProfileService } from '../../profile/service/profile';
import { first } from 'rxjs';
import { Stats } from '../model/stats.model';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
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

  constructor(private profileService:ProfileService,private userservice: Userservice){}

  
 
 
  ngOnInit(): void {
 
    this.getAll();
    
  }
    
  public dataSource = new MatTableDataSource<userElement>();
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public  profiledata: any = [];
  //stats: Stats[] = [];
  filtered!: Object[];
  stats: any =[];
 
  myChecked: boolean = true;



  // stats = [
  //   { title: 'Buyers', value: 533, change: 7.5, icon: 'fas fa-users' },
  //   { title: 'Sellers', value: 340, change: -24.5, icon: 'fas fa-user-tie' },
  //   { title: 'Traders', value: 560, change: 3.5, icon: 'fas fa-chart-line' },
  //   { title: 'Trade Volume', value: '45.6743', change: 53.5, icon: 'fas fa-layer-group' }
  // ];

  tradingDisplayedColumns: string[] = [
    'user_name'
  ];

  biddingDisplayedColumns: string[] = [
    'lot', 'type', 'qty', 'base',
    'current', 'buyer', 'action'
  ];

  // trading = Array(8).fill({
  //   symbol: 'Egg',
  //   buyQty: '13,761',
  //   buyRate: '42.67',
  //   sellRate: '42.67',
  //   sellQty: '15,761',
  //   avg: '43.14',
  //   high: '43.88',
  //   low: '42.45'
  // });

  bidding = Array(8).fill({
    lot: 'PL-1023',
    type: 'Egg (40gm–46gm)',
    qty: '250g',
    base: 'Rs.49,900',
    current: 'Rs.42,800',
    buyer: 'ABC Eggs'
  });

 

     getAll(): void {

 
      
      
      this.userservice.getAllUsers()
        .pipe(first())
        .subscribe(response => {


                    this.trading = response

  
this.dataSource.data =this.trading;

//  this.dataSource.data = Array(8).fill({
//     symbol: 'Egg',
//     buyQty: '13,761',
//     buyRate: '42.67',
//     sellRate: '42.67',
//     sellQty: '15,761',
//     avg: '43.14',
//     high: '43.88',
//     low: '42.45'
//   });
          
  //               this.stats = [
  //   { title: 'Buyers', value: 533, change: 7.5, icon: 'fas fa-users' },
  //   { title: 'Sellers', value: 340, change: -24.5, icon: 'fas fa-user-tie' },
  //   { title: 'Traders', value: 560, change: 3.5, icon: 'fas fa-chart-line' },
  //   { title: 'Trade Volume', value: '45.6743', change: 53.5, icon: 'fas fa-layer-group' }
  // ];
        

   
        
           this.profiledata = response
           //= this.profiledata.filter((profile: any) => profile.profile_type_id == 1);
           this.filtered = this.profiledata.filter((profile: any) => profile.profile_type_id == 1);
           var seller = this.profiledata.filter((profile: any) => profile.profile_type_id == 2);
           var trader = this.profiledata.filter((profile: any) => profile.profile_type_id == 3);
         

            
  
            console.log(this.profiledata);
            

             let stat = new Stats();
               stat.title = "Buyer";
               stat.value = this.filtered.length;
               stat.change = 2.5;
               stat.icon = "fas fa-users";
               this.stats.push(stat);

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
}