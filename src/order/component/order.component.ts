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

public dataSource = new MatTableDataSource<profileelements>();
 
@ViewChild(MatSort) sort!: MatSort;
@ViewChild("paginator") paginator!: MatPaginator;
@ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;


  DisplayedColumns: string[] = [
      'firstName','lastName' ,'email_address','mobile_no','exposure','profile_type','zoneName','created_date',
    'action'
  ];

 public  oderData: any = [];
  


      ngOnInit(): void {
        
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
