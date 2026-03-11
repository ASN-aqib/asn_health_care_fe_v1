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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { Onlineusers } from '../onlinedialog/onlineusers/onlineusers';


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
 
  
  public trading: any =[];

  public bidding: any =[];

  

  constructor(private profileService:ProfileService,private dashboarsService: Dashboardservice,
              private dialog: MatDialog
  ){}

  
 
 
  ngOnInit(): void {
 
    this.getprofiles();
    this.getAll();
    
   
    
  }
    
    

  public dataSource = new MatTableDataSource<tradingelements>();
  public dataSource1 = new MatTableDataSource<biddingelements>();


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild("paginator") paginator!: MatPaginator;
  @ViewChild("paginator1") paginator1!: MatPaginator;
  public  profiledata: any = [];
  //stats: Stats[] = [];
  filtered!: Object[];
  stats: any =[];
   pageSize = 10;
  pageIndex = 0;
  myChecked: boolean = true;

 

  tradingDisplayedColumns: string[] = [
    'transactionId' ,'categoryname', 'quantity' ,'price' ,'buyername' ,'sellername' , 'commission'
  ];

  biddingDisplayedColumns: string[] = [
      'categoryname', 'buyingQuantity', 'buyingRate' ,'sellerQuantity', 'sellerRate',
      'high', 'low', 'createdDate', 'action'
  ];
 

  
 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }


   openDialog(): void {
    const dialogRef = this.dialog.open(Onlineusers, {
      width: '850px',
      height: '550px',// Optional: set width, height, or other config options
      //data: { name: 'John', animal: 'Dog' }, // Optional: pass data to the dialog
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
        
             let tradevol = new Stats();
               tradevol.title = "Trade Vol";
               tradevol.value = trader.length;
               tradevol.change = 2.5;
               tradevol.icon = "fas fa-chart-line";
               this.stats.push(tradevol);

               

         });
  }


 


     getAll(): void {
    
      this.dashboarsService.getAllLiveBidding()
        .pipe(first())
        .subscribe(response => {

      this.bidding = response
      //this.dataSource1 =this.bidding;
      console.log("buyer",this.bidding);

       this.dataSource1 = new MatTableDataSource(this.bidding);
       this.dataSource1.paginator = this.paginator1;
       this.getLiveTrading();  
        
         
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

         console.log(this.trading);
         this.dataSource = new MatTableDataSource(this.trading);
         this.dataSource.paginator = this.paginator;
       

       });
   }
}