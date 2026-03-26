import {ChangeDetectionStrategy, Component, OnInit, signal, ViewChild} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
import { elementAt, first } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';
import { Userservice } from '../service/userservice';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgFor } from '@angular/common';
import { Roleservice } from '../../services/roleservice';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

  export interface userElement {
  id: number;
  user_name: number;
  email_address:string;
  
}

@Component({
  selector: 'app-user',
    imports: [MatFormFieldModule,MatTableModule, MatInputModule, FormsModule,CommonModule,MatCheckboxModule,MatProgressSpinnerModule,
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule,MatPaginator,MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  public dataSource = new MatTableDataSource<userElement>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public userForm!: FormGroup;

  private update:any;

   public  roledata: any = [];
   hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  displayedColumns: string[] = ['id', 'username','emailaddress','rolename','createdDate' ,'actions' ];
  
   isChecked: any;
   id:number=0;

  errorMessage = signal('');
  option: any;
   education_level:any;
  public  userdata: any = [];
  public  roledataById: any = [];
  constructor(private userservice: Userservice,
     private roleservice: Roleservice,
     private snackBar: MatSnackBar,
     public formBuilder: FormBuilder, 


  ) {
     
  }

    ngOnInit(): void {
   
      this.update = 0;
      
      this.getAllUsers();
      this.getAllRoles();
      this.initializeForm();
  }

  initializeForm() {
      this.userForm = this.formBuilder.group({
      userNameField: ['', Validators.required],
      passwordField: ['', Validators.required],
      emailField: ['', Validators.required],
      education_level:['', Validators.required],
      isChecked:['', Validators.required],

    });

     
  }

   
  
   edit(element:any) {
    
    this.update = 1;
        this.userForm.patchValue({
        userNameField: element.username, 
        passwordField: element.password,
        emailField : element.emailaddress,
        isactive : element.isactive,
      
        });
      
      console.log(element);
      
       this.userForm.get('education_level')?.setValue(element.roleid.toString());
       this.userForm.get('isChecked')?.setValue(element.isactive.toString());
       this.id = element.id;

 

}




 delete(element:any) {

    console.log(element.id);

      this.userservice.deleteById(element.id)
      .pipe(first())
      .subscribe(response => {

 
        this.snackBar.open(' Record has been deleted successfully! ','Close', {    
              duration: 4000,    
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'custom-style',
            });

       this.getAllUsers();
      });
   }


 clear()
 {  
  this.update = 0;
  this.userForm.reset();
 
  
 
  //this.userForm.setErrors(null); // could be removed


}


 toggle(event: MatCheckboxChange) {
  this.isChecked = event.checked; // This is the boolean value (true/false)
  console.log("Checkbox value:", this.isChecked); // This gets the assigned 'value' attribute
}
 

     getAllRoles(): void {
    this.roleservice.getAll()
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


  updateuser()
  {

    alert('update');

      if (this.userForm.invalid) {
      return;
      }
  

  var check:any;
  if(this.isChecked)
  {
      check = 1;
  }
  else
  {
       check = 0;
  }

    //alert(check)
    
    let roleObj = {
      id: this.id,
      username: this.userForm.controls['userNameField'].value,
      password: this.userForm.controls['passwordField'].value,
      emailaddress: this.userForm.controls['emailField'].value, 
      isactive : check,
      roleid:   this.userForm.controls['education_level'].value,
     };
    // console.log( this.userNameField.value);
    // console.log( this.passwordField.value);
    // console.log( this.emailField.value);

    this.userservice.updateuser(roleObj)
      .pipe(first())
      .subscribe(response => {
        console.log(response);

             this.snackBar.open(' Record has been updated successfully! ','Close', {    
              duration: 4000,    
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'custom-style',
            });

      this.update = 0;
      this.clear();
      this.getAllUsers();
    
    });

  // updateErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage.set('You must enter a value');
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage.set('Not a valid email');
  //   } else {
  //     this.errorMessage.set('');
  //   }
  // }
      
    }


onClick(event: Event)
 {  


  if(this.update == 0)
  {
    this.addUser()
  }
  else
  {
    this.updateuser();

  }

  

 }

 addUser()
 {

   if (this.userForm.invalid) {
      return;
  }
  

  var check:any;
  if(this.isChecked)
  {
      check = 1;
  }
  else
  {
       check = 0;
  }

    //alert(check)
    
    let roleObj = {
      username: this.userForm.controls['userNameField'].value,
       password: this.userForm.controls['passwordField'].value,
       domain : "Web",
       emailaddress: this.userForm.controls['emailField'].value, 
      isactive : check,
      createdBy : 1,
      roleid:   this.userForm.controls['education_level'].value,
     };
    // console.log( this.userNameField.value);
    // console.log( this.passwordField.value);
    // console.log( this.emailField.value);

    this.userservice.adduser(roleObj)
      .pipe(first())
      .subscribe(response => {
        console.log(response);

             this.snackBar.open(' Record has been added successfully! ','Close', {    
              duration: 4000,    
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'custom-style',
            });


        this.clear();
        this.getAllUsers();
        //if (response.code === WebConstants.STATUS.CODE_SUCCESS) {
       //   this.toaster.success("Role privilege has been updated", "Success");
        //}
      });

 }

    getAllUsers(): void {
    this.userservice.getAllUsers()
      .pipe(first())
      .subscribe((response: any) => {


      
      
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

