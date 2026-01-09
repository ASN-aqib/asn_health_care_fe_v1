import {ChangeDetectionStrategy, Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
 import {MatTableDataSource, MatTableModule} from '@angular/material/table';
 import { first } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { validate } from '@angular/forms/signals';
import { PermissionService } from '../service/permission.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../role/service/roleservice';
import { MatDialog } from '@angular/material/dialog';
import { Resourcelist } from './modal/resourcelist';

  export interface permissionElement {
  id: number;
  role_name: number;
  
}

interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-permission.component',
  imports: [MatFormFieldModule,MatTableModule, MatInputModule, FormsModule,
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule,MatPaginator,MatSelectModule,CommonModule],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.css',
})
export class PermissionComponent  implements OnInit {
  public dataSource = new MatTableDataSource<permissionElement>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

    animalControl = new FormControl("", Validators.required);
  selectFormControl = new FormControl("", Validators.required);
   readonly dialog = inject(MatDialog);

  readonly userField = new FormControl('', [Validators.required]);
  readonly description = new FormControl('', [Validators.required]);
 education_level:any;
  
 

  displayedColumns: string[] = ['id', 'role_name','description','created_date' ,'actions' ];
 
  errorMessage = signal('');
 
  public  roledata: any = [];
  public  roledataById: any = [];
  constructor(private permissionservice: PermissionService, private roleservice: RoleService) {
     
  }
  durationInSeconds = 5;

    ngOnInit(): void {
   
      
      this.getAllRoles();

  }

  
  
   edit(element:any) {
    // console.log(element.id);
    // this.roledataById = [];
    
    //  this.rolservice.findById(element.id)
    //   .pipe(first())
    //   .subscribe(response => {
    //    this.roledataById = response
    //     console.log(this.roledataById);
    //     this.rolefield.setValue(this.roledataById.role_name);
          
    //   });

    // this.rolefield.setValue(element.role_name);
    // this.description.setValue(element.description);


   }

   delete(element:any) {

    console.log(element.id);
   }

   openResource()
   {
      const dialogRef = this.dialog.open(Resourcelist, {
      width: "550px",
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
   }

   clear()
 {  

   
 
 }
  // updateErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage.set('You must enter a value');
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage.set('Not a valid email');
  //   } else {
  //     this.errorMessage.set('');
  //   }
  // }

onClick(event: Event)
 {  


    // let roleObj = {
    //   rolename: this.rolefield.value,
    //   description: this.description.value,
    //   createdBy : 1
    //  };
    // console.log( this.rolefield.value);
    // console.log( this.description.value);

    // this.permissionservice.addrole(roleObj)
    //   .pipe(first())
    //   .subscribe(response => {
    //     console.log(response);
    //           this.getAllRoles();
 

    //    this.clear();
    //     //if (response.code === WebConstants.STATUS.CODE_SUCCESS) {
    //    //   this.toaster.success("Role privilege has been updated", "Success");
    //     //}
    //   });




  }

    getAllRoles(): void {
    this.roleservice.getAllRoles()
      .pipe(first())
      .subscribe(response => {

 
      
          this.roledata = response

          console.log(this.roledata);
        //  this.dataSource.data =this.roledata;
        //  this.dataSource.paginator = this.paginator;
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

}
