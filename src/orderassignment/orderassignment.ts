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
import {MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
import { Orderservice } from '../services/orderservice';

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
    
    public orders: any =[];

    public mergeorders: any =[];
    public mergeorderdetail: any =[];


     isChecked: any;
    public dataSource = new MatTableDataSource<biddingelements>();
    @ViewChild('sellerSort') sellerSort!: MatSort;
    @ViewChild("paginator") paginator!: MatPaginator;
 
    ordersDisplayedColumns: string[] = [
    'select', 'SellerName','quantity', 
     'pickupZone', 'price', 'pickupLocation' ,'BuyerName','dropOffZone' ,
     'dropoffLocation', 
     'createdDate',
      
  ];

  constructor(private dialog: MatDialog  ,private dashboarsService: Dashboardservice,
              private orderService: Orderservice
           
   ){   
 
    }


  ngOnInit(): void {

        this.getOrders();

        
   }

  toggle(event: MatCheckboxChange,element :any) {
    this.isChecked = event.checked; // This is the boolean value (true/false)
    console.log("Checkbox value:", this.isChecked); // This gets the assigned 'value' attribute
    console.log(" element ", element); // This gets the assigned 'value' attribute

    if(this.isChecked)
    {
      this.mergeorders.push(element.orderId);
      this.mergeorderdetail.push(element.id);
    }
    else
    {
      const index = this.mergeorders.indexOf(element.orderId);
        if (index !== -1) {
        this.mergeorders.splice(index, 1); // Removes only the first 'banana'
      }

      const index1 = this.mergeorderdetail.indexOf(element.id);
        if (index1 !== -1) {
        this.mergeorderdetail.splice(index, 1); // Removes only the first 'banana'
      }

      
    }

    console.log("thie mergorders",this.mergeorders);
    console.log("thie mergeorderdetail",this.mergeorderdetail);

  }


  submit(event: Event){



      
    // let roleObj = {
    //   orderId:  this.mergeorders,
    //   orderDetailId: this.mergeorderdetail,
    //   pickupZoneId: ,
    //   dropoffZoneId: ,
    //   totalQuantity: 1,
    //   updatedBy : 1
      
    //  };
    // // console.log( this.userNameField.value);
    // // console.log( this.passwordField.value);
    // // console.log( this.emailField.value);

    // this.profileService.addProfile(roleObj)
    //   .pipe(first())
    //   .subscribe(response => {
    //     console.log(response);

    //          this.snackBar.open(' Record has been added successfully! ','Close', {    
    //           duration: 4000,    
    //           horizontalPosition: 'center',
    //           verticalPosition: 'top',
    //           panelClass: 'custom-style',
    //         });


    //     this.clear();
    //     this.getprofiles();
    //     //if (response.code === WebConstants.STATUS.CODE_SUCCESS) {
    //    //   this.toaster.success("Role privilege has been updated", "Success");
    //     //}
    //   });


  


  }

    
 ngAfterViewInit(): void {
   
    this.dataSource.paginator = this.paginator;

    

  }

   isSomeSelected() {
   
  }



     getOrders(): void {
    
      this.orderService.getOrdres()
        .pipe(first())
        .subscribe(response => {

      this.orders = response

      //  for (const item of this.selling) {


      //   const hoursToSubtract = 5;
      //   const updatedDate = new Date(item.created_date); // Clones the date to avoid modifying the original state
      //   updatedDate.setHours(updatedDate.getHours() - hoursToSubtract);
      //    item.created_date = updatedDate;

      //  }
      //this.dataSource1 =this.bidding;
      console.log("orders",this.orders);



       this.dataSource = new MatTableDataSource(this.orders);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort= this.sellerSort;
  
        
     
     });
    }


}
