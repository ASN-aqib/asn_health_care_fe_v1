import {ChangeDetectionStrategy, Component, OnInit, signal, ViewChild} from '@angular/core';
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
import { Userservice } from '../service/userservice';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgFor } from '@angular/common';

  export interface userElement {
  id: number;
  user_name: number;
  email_address:string;
  
}

@Component({
  selector: 'app-user',
    imports: [MatFormFieldModule,MatTableModule, MatInputModule, FormsModule,CommonModule,[NgFor],
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule,MatPaginator,MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  public dataSource = new MatTableDataSource<userElement>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  readonly userNameField = new FormControl('', [Validators.required]);
  readonly passwordField = new FormControl('', [Validators.required]);
  readonly emailField = new FormControl('', [Validators.required]);
 
   hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  displayedColumns: string[] = ['id', 'user_name','email_address','created_date' ,'actions' ];
 
  errorMessage = signal('');
 
 public  userdata: any = [];
  public  roledataById: any = [];
  constructor(private userservice: Userservice) {
     
  }

    ngOnInit(): void {
   
      
      this.getAllUsers();

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

    this.userNameField.setValue(element.user_name);
    this.passwordField.setValue(element.password);
    this.emailField.setValue(element.email_address);


   }

   delete(element:any) {

    console.log(element.id);
   }


   clear(event: Event)
 {  

  this.userNameField.setValue("");
 this.passwordField.setValue("");
  this.emailField.setValue("");
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
    
    let roleObj = {
      username: this.userNameField.value,
      password: this.passwordField.value,
      emailaddress: this.emailField.value,
      createdBy : 1
     };
    console.log( this.userNameField.value);
    console.log( this.passwordField.value);
    console.log( this.emailField.value);

    this.userservice.adduser(roleObj)
      .pipe(first())
      .subscribe(response => {
        console.log(response);
        this.getAllUsers();
        //if (response.code === WebConstants.STATUS.CODE_SUCCESS) {
       //   this.toaster.success("Role privilege has been updated", "Success");
        //}
      });




  }

    getAllUsers(): void {
    this.userservice.getAllUsers()
      .pipe(first())
      .subscribe(response => {


      
      
          this.userdata = response

          console.log(this.userdata);
          this.dataSource.data =this.userdata;
          this.dataSource.paginator = this.paginator;
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

