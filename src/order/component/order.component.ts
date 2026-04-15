import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { profileelements } from '../../profile/component/profile';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Orderservice } from '../../services/orderservice';
import { first } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ordermap } from '../ordermap/ordermap';

@Component({
  selector: 'app-order.component',
  imports: [CommonModule,MatFormFieldModule,MatTableModule, MatInputModule, MatCheckboxModule,MatSlideToggleModule,
     FormsModule,MatSelectModule,MatPaginator,MatPaginatorModule,
     MatTableModule, MatCardModule,
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
 
  pageSize = 10;
  pageIndex = 0;
  private update:any;
  isChecked: any;
  optiontext: any;
  ngcolor: any;

public dataSource = new MatTableDataSource<orderelements>();
 
@ViewChild(MatSort) sort!: MatSort;
@ViewChild("paginator") paginator!: MatPaginator;
@ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;


  DisplayedColumns: string[] = [ 'BuyerName', 
      'pickupZone','SellerName' ,'price','pickupcontactNo','pickupLocation','dropOffZone',
       'dropContactNo', 'order_status','createdDate',
       'action'
  ];

 public  orderData: any = [];
  
 constructor(private orderService: Orderservice, private dialog: MatDialog  ){}


      ngOnInit(): void {
       
        this.getAll()
      }


  //     openDialog(element:any) {
  //     const dialogConfig = new MatDialogConfig();

  //     console.log(element);

  //     dialogConfig.data = {
  //      element
  //   };
  // }



 
        openDialog(element:any) {
        const dialogConfig = new MatDialogConfig();

        
  
        dialogConfig.data = {
        element
      };
  
      const dialogRef = this.dialog.open(Ordermap, {
        width: '900px',
        height: '600px',// Optional: set width, height, or other config options
       // data: { this.bidding }, // Optional: pass data to the dialog
       data: element
      });
  
      // Optional: Subscribe to the afterClosed() observable to get data back when the dialog closes
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        // Handle data returned from the dialog here
      });
    }
    

      getAll()
      {
          this.orderService.getAll()
                  .pipe(first())
                  .subscribe(response => {
              
                      this.orderData = response
        
                      console.log(this.orderData)

                      for (const order of this.orderData) {

                        if(order.order_status == "Pending")
                        {order.color = "FFBF00";}
                        else if(order.order_status == "Delivery")
                        {order.color = "90ee90";}
                        else if(order.order_status == "Delivered")
                        {order.color = "2E8B57";}

                        

                      }

          
                   this.dataSource = new MatTableDataSource(this.orderData);
                   this.dataSource.paginator = this.paginator;
                         
          
           });


      }
    
    
     applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


    
    
    delete(element:any) {
     
    // console.log(element);
    //        const confirmDialog = this.dialog.open(ConfirmationDialog, {
    //       data: {
    //         title: 'Confirm Remove Profile',
    //         message: 'Are you sure, you want to remove the profile of : ' + element.user_name,
    //         userid:element.user_id
    //       }
    //     });
    //     confirmDialog.afterClosed().subscribe(result => {
    //         this.getprofiles();
    //     });
        
       }

    edit(element:any) {

      console.log(element);
 
  // this.profileForm.controls['first'].setValue(element.firstName);
  // this.profileForm.controls['last'].setValue(element.lastName);
  // this.profileForm.controls['emailaddress'].setValue(element.email_address);

  // this.profileForm.controls['mobile'].setValue(element.mobile_no);
  // this.profileForm.controls['city'].setValue(element.city);
  // this.profileForm.controls['address'].setValue(element.address);
  // this.profileForm.controls['exposure'].setValue(element.exposure);

  // this.profileForm.controls['options'].setValue(element.profile_type_id);
  // this.profileForm.controls['zonelist'].setValue(element.zoneid);

  // if(element.is_active == 1)
  // {this.profileForm.controls['isChecked'].setValue(true);}
  // else{this.profileForm.controls['isChecked'].setValue(false);}
  
  // this.profileForm.controls['username'].setValue(element.user_name);

  // this.update = 1;

}

}
export interface orderelements {
  
  id:number;
 
}