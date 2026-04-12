import { ChangeDetectionStrategy, Component, OnInit, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { first } from 'rxjs';
import { Roleservice } from '../../services/roleservice';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { disabled, validate } from '@angular/forms/signals';
import { TransporterService } from '../../services/transporter.service';

@Component({
  selector: 'app-transporter',
    imports: [CommonModule,MatFormFieldModule,MatTableModule, MatInputModule, MatCheckboxModule,MatSlideToggleModule,
     FormsModule,MatSelectModule,MatPaginator,MatPaginatorModule,
     MatTableModule, MatCardModule,
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transporter.html',
  styleUrl: './transporter.css',
})
export class Transporter  implements OnInit {

  pageSize = 10;
  pageIndex = 0;
  private update:any;
  isChecked: any;
  optiontext: any;

public dataSource = new MatTableDataSource<profileelements>();
 
@ViewChild(MatSort) sort!: MatSort;
@ViewChild("paginator") paginator!: MatPaginator;
@ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
 
  


  public  profiledata: any = [];
  public  roles: roleitem [] = [];
  option: any;
  iconName:any; // Default icon name
   hide = signal(true);

     clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  public transporterForm!: FormGroup;


  DisplayedColumns: string[] = [
     'companyname','owner','vehicletype','capacity','email_address','mobile_no', 'address','created_date',
    'action'
  ];

  constructor( private transporterService:TransporterService,
        private matIconRegistry: MatIconRegistry,     public formBuilder: FormBuilder, 
    private domSanitizer: DomSanitizer ,     private snackBar: MatSnackBar,

  ) {


    this.matIconRegistry.addSvgIcon(
      "locked",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/lock.svg")
    );
  }
 
   ngOnInit(): void {
    //this.getprofiles();
    this.update = 0;
    this.initializeForm();
    this.getroles();
   }


   initializeForm() {
      this.transporterForm = this.formBuilder.group({
      companyname : new FormControl('', [Validators.required]),
      owner :  new FormControl('', [Validators.required]),
      emailaddress : new FormControl('', ),
      mobile : new FormControl('',),
      city : new FormControl('',),
      address : new FormControl('',),
      vehicletype : new FormControl('',[Validators.required]),   
      capacity : new FormControl('',[Validators.required]),   
      registrationno: new FormControl('',[Validators.required]), 
      registrationcity: new FormControl('', ),   
  
      username : new FormControl('',[Validators.required]),      
      password : new FormControl('',[Validators.required]),      
      isChecked: new FormControl('',[Validators.required]),  
      // capacity:  new FormControl({ value: "", disabled: true },[Validators.required]),      
      options:['', Validators.required],
      // licenseno :  new FormControl({ value: "", disabled: true }),      

      
      

    });

  }

  selectedValue(event: MatSelectChange) {
 
 
   
    this.optiontext  = event.source.triggerValue;

    // if(this.optiontext=='Transporter')
    // { 
    //   this.profileForm.controls['capacity'].enable();
    //   this.profileForm.controls['licenseno'].enable();

     
    // }
    // else
    // {
    //   this.profileForm.controls['capacity'].disable();
    //   this.profileForm.controls['licenseno'].disable();

    // }
  
  
}


onEscape() {
  alert('deselect');
  // Deselect all options by setting the control value to empty array
 // this.profileForm.controls['options'].setValue([]);
  
}
 
edit(element:any) {

console.log(element);
 
  this.transporterForm.controls['first'].setValue(element.firstName);
  this.transporterForm.controls['last'].setValue(element.lastName);
  this.transporterForm.controls['emailaddress'].setValue(element.email_address);

  this.transporterForm.controls['mobile'].setValue(element.mobile_no);
  this.transporterForm.controls['city'].setValue(element.city);
  this.transporterForm.controls['address'].setValue(element.address);
  this.transporterForm.controls['exposure'].setValue(element.exposure);

}




changeIcon() {
    // Toggle between 'more_horiz' and 'more_vert' for example
    this.iconName = "locked"

    alert(this.iconName);
  }

    ngAfterViewInit(): void {
  //  this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }


   toggle(event: MatCheckboxChange) {
  this.isChecked = event.checked; // This is the boolean value (true/false)
  console.log("Checkbox value:", this.isChecked); // This gets the assigned 'value' attribute
}
 

 SetValidation()
 {
    this.transporterForm.controls['first'].setValidators([Validators.required]);
    this.transporterForm.controls['first'].updateValueAndValidity();
   
    this.transporterForm.controls['last'].setValidators([Validators.required]);
    this.transporterForm.controls['last'].updateValueAndValidity();
   
    this.transporterForm.controls['mobile'].setValidators([Validators.required]);
    this.transporterForm.controls['mobile'].updateValueAndValidity();
  
    this.transporterForm.controls['exposure'].setValidators([Validators.required]);
    this.transporterForm.controls['exposure'].updateValueAndValidity();
  
    this.transporterForm.controls['option'].setValidators([Validators.required]);
    this.transporterForm.controls['option'].updateValueAndValidity();

    this.transporterForm.controls['username'].setValidators([Validators.required]);
    this.transporterForm.controls['username'].updateValueAndValidity();

    this.transporterForm.controls['password'].setValidators([Validators.required]);
    this.transporterForm.controls['password'].updateValueAndValidity();
  
  
  
  }

  submit(event: Event)
  {
 
     this.SetValidation();
     this.addTransporter();
 

 
 
  }


  addTransporter()
 {

   if (this.transporterForm.invalid) {
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
      firstName: this.transporterForm.controls['first'].value,
      lastName: this.transporterForm.controls['last'].value,
      domain : "Mobile",
      mobile_no: this.transporterForm.controls['mobile'].value, 
      city: this.transporterForm.controls['city'].value, 
      address: this.transporterForm.controls['address'].value, 
      exposure: this.transporterForm.controls['exposure'].value, 
      username: this.transporterForm.controls['username'].value,
      password: this.transporterForm.controls['password'].value,
      emailaddress: this.transporterForm.controls['emailaddress'].value,
      isactive : check,
      createdBy : 1,
      profile_type_id:   this.transporterForm.controls['options'].value,
      profile_type:  this.optiontext
     };
    // console.log( this.userNameField.value);
    // console.log( this.passwordField.value);
    // console.log( this.emailField.value);

    this.transporterService.addTransporter(roleObj)
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
        this.getprofiles();
        //if (response.code === WebConstants.STATUS.CODE_SUCCESS) {
       //   this.toaster.success("Role privilege has been updated", "Success");
        //}
      });

 }

    clear()
    {  
      this.update = 0;
     
    //  this.profileForm.controls['first'].setValidators(null);
    //  this.profileForm.controls['first'].setValue("");
     
     Object.keys(this.transporterForm!.controls).forEach(key => {
         this.transporterForm.get(key)!.setValidators(null);
         this.transporterForm.get(key)!.setValue("");
     });


      // // this.profileForm.controls['first'].setValidators(null);
      // this.profileForm.controls['last'].setValue("");
      // this.profileForm.controls['mobile'].setValue("");
      // this.profileForm.controls['city'].setValue("");
      // this.profileForm.controls['address'].setValue("");
      // this.profileForm.controls['exposure'].setValue("");
      // this.profileForm.controls['username'].setValue("");
      // this.profileForm.controls['password'].setValue("");
      // this.profileForm.controls['emailaddress'].setValue("");
      // this.profileForm.controls['options'].setValue("");


 

    }

  getprofiles(){
      
     this.transporterService.getAllTransporters()
          .pipe(first())
          .subscribe(response => {
      
              this.profiledata = response

              console.log(this.profiledata)
  
           this.dataSource = new MatTableDataSource(this.profiledata);
           this.dataSource.paginator = this.paginator;
                 
  
           });
    }

  getroles(){
 
      const newItem: roleitem = {
      id: 1,
      value: "Buyer"
       };
      const newItem1: roleitem = {
      id: 2,
      value: "Seller"
       };
       const newItem2: roleitem = {
      id: 3,
      value: "Trader"
       };
      

      this.roles.push(newItem);
      this.roles.push(newItem1);
      this.roles.push(newItem2);
      

      console.log(this.roles);
  }

}


export interface profileelements {
  
  id:number;
 

  
}


export interface roleitem {
  
  id:number;
  value:string;
 

  
}


 
