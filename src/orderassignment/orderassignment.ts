import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Dashboardservice } from '../services/dashboardservice';
import { first } from 'rxjs';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface biddingelements {
  
  id:number;

  
}

@Component({
  selector: 'app-orderassignment',
  imports: [   CommonModule,MatPaginator,MatPaginatorModule,
               MatTableModule,MatFormFieldModule,MatInputModule,
               MatButtonModule,MatSortModule,MatIconModule,MatCheckboxModule,
               MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './orderassignment.html',
  styleUrl: './orderassignment.css',
})




export class Orderassignment implements OnInit    {
    public bidding: any =[];
    public selling: any =[];
   

    public dataSource1 = new MatTableDataSource<biddingelements>();
    public dataSource2 = new MatTableDataSource<biddingelements>();

    @ViewChild('sellerSort') sellerSort!: MatSort;
    @ViewChild('buyerSort') buyerSort!: MatSort;
    
    @ViewChild(MatSort) sortb!: MatSort;
    
    @ViewChild("paginator1") paginator1!: MatPaginator;
    @ViewChild("paginator2") paginator2!: MatPaginator;
    

      biddingDisplayedColumns: string[] = [
     'FullName', 'category_name', 'quantity', 'price' ,
      //'sellerQuantity', 'sellerRate',
      'created_date',
      
  ];
 
    sellerDisplayedColumns: string[] = [
    'select', 'seller_name', 'category_name', 'quantity', 'sell_price' ,
      //'sellerQuantity', 'sellerRate',
      'created_date',
      
  ];

  constructor(private dialog: MatDialog  ,private dashboarsService: Dashboardservice,
           
   ){    }


  ngOnInit(): void {

        this.getAllSellers();

        this.getAllBuyer();
   }


  submit(event: Event){

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
       this.dataSource1.sort= this.buyerSort;

        
        });
    }
 

   isSomeSelected() {
   
  }



     getAllSellers(): void {
    
      this.dashboarsService.getAllLiveSeller()
        .pipe(first())
        .subscribe(response => {

      this.selling = response

      //  for (const item of this.selling) {


      //   const hoursToSubtract = 5;
      //   const updatedDate = new Date(item.created_date); // Clones the date to avoid modifying the original state
      //   updatedDate.setHours(updatedDate.getHours() - hoursToSubtract);
      //    item.created_date = updatedDate;

      //  }
      //this.dataSource1 =this.bidding;
      console.log("Seller",this.selling);



       this.dataSource2 = new MatTableDataSource(this.selling);
       this.dataSource2.paginator = this.paginator2;
       this.dataSource2.sort= this.sellerSort;
  
        
     
     });
    }


}
