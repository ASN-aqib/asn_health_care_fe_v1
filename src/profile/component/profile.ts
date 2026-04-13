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
import { ProfileService } from '../service/profile';
import { first } from 'rxjs';
import { Roleservice } from '../../services/roleservice';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ZoneService } from '../../services/zone.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from './dialog/confirmation-dialog';
 

@Component({
  selector: 'app-profile',
  imports: [CommonModule,MatFormFieldModule,MatTableModule, MatInputModule, MatCheckboxModule,MatSlideToggleModule,
     FormsModule,MatSelectModule,MatPaginator,MatPaginatorModule,
     MatTableModule, MatCardModule,
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],

  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

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
 
   

  public  profiledata: any = [];
  public  roles: roleitem [] = [];
  option: any;
  iconName:any; // Default icon name
   hide = signal(true);

     clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  public profileForm!: FormGroup;
  public  zones: any = [];

  DisplayedColumns: string[] = [
      'firstName','lastName' ,'email_address','mobile_no','exposure','profile_type','zoneName','created_date',
    'action'
  ];

  constructor( private profileService:ProfileService, private roleService:Roleservice,
    private matIconRegistry: MatIconRegistry,     public formBuilder: FormBuilder, 
    private domSanitizer: DomSanitizer ,     private snackBar: MatSnackBar,
    private zoneService:ZoneService ,  private dialog: MatDialog 

  ) {


    this.matIconRegistry.addSvgIcon(
      "locked",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/lock.svg")
    );
  }
 
   ngOnInit(): void {
    this.getprofiles();
    this.update = 0;
    this.initializeForm();
    this.getroles();
    this.getZones();
   }


   initializeForm() {
      this.profileForm = this.formBuilder.group({
      first : new FormControl('', [Validators.required]),
      last :  new FormControl('', [Validators.required]),
      emailaddress : new FormControl('', [Validators.required, Validators.email],),
      mobile : new FormControl('',),
      city : new FormControl('',),
      address : new FormControl('',),
      exposure : new FormControl('',[Validators.required]),   
      username : new FormControl('',[Validators.required]),      
      password : new FormControl('',[Validators.required]),      
      isChecked: new FormControl('',[Validators.required]),  
      // capacity:  new FormControl({ value: "", disabled: true },[Validators.required]),      
      options:['', Validators.required],
      zonelist:['', Validators.required],
      // licenseno :  new FormControl({ value: "", disabled: true }),      

      
      

    });

  }


  handleKeyDown(e:any) {
    const typedValue = e.keyCode;
    if (typedValue < 48 && typedValue > 57) {
      // If the value is not a number, we skip the min/max comparison 
      return;
    }

    const typedNumber = parseInt(e.key);
    const min = parseInt(e.target.min);
    const max = parseInt(e.target.max);
    const currentVal = parseInt(e.target.value) || '';
    const newVal = parseInt(typedNumber.toString() + currentVal.toString());

    if (newVal < min || newVal > max) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  selectedZone(event: MatSelectChange) {
  
    console.log(event.source.triggerValue);
    console.log(this.optiontext);
  }
  selectedValue(event: MatSelectChange) {
 
 
   
    this.optiontext  = event.source.triggerValue;
    console.log(event.source.triggerValue);

   
  
}


onEscape() {
  alert('deselect');
  // Deselect all options by setting the control value to empty array
 // this.profileForm.controls['options'].setValue([]);
  
}
 
edit(element:any) {

console.log(element);
 
  this.profileForm.controls['first'].setValue(element.firstName);
  this.profileForm.controls['last'].setValue(element.lastName);
  this.profileForm.controls['emailaddress'].setValue(element.email_address);

  this.profileForm.controls['mobile'].setValue(element.mobile_no);
  this.profileForm.controls['city'].setValue(element.city);
  this.profileForm.controls['address'].setValue(element.address);
  this.profileForm.controls['exposure'].setValue(element.exposure);

  this.profileForm.controls['options'].setValue(element.profile_type_id);
  this.profileForm.controls['zonelist'].setValue(element.zoneid);

  if(element.is_active == 1)
  {this.profileForm.controls['isChecked'].setValue(true);}
  else{this.profileForm.controls['isChecked'].setValue(false);}
  
  this.profileForm.controls['username'].setValue(element.user_name);

  this.update = 1;
}

 


 delete(element:any) {
 
console.log(element);
       const confirmDialog = this.dialog.open(ConfirmationDialog, {
      data: {
        title: 'Confirm Remove Profile',
        message: 'Are you sure, you want to remove the profile of : ' + element.user_name,
        userid:element.user_id
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
        this.getprofiles();
    });
    
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
    this.profileForm.controls['first'].setValidators([Validators.required]);
    this.profileForm.controls['first'].updateValueAndValidity();
   
    this.profileForm.controls['last'].setValidators([Validators.required]);
    this.profileForm.controls['last'].updateValueAndValidity();
   
    this.profileForm.controls['mobile'].setValidators([Validators.required]);
    this.profileForm.controls['mobile'].updateValueAndValidity();
  
    this.profileForm.controls['exposure'].setValidators([Validators.required]);
    this.profileForm.controls['exposure'].updateValueAndValidity();
  
    this.profileForm.controls['options'].setValidators([Validators.required]);
    this.profileForm.controls['options'].updateValueAndValidity();

    this.profileForm.controls['username'].setValidators([Validators.required]);
    this.profileForm.controls['username'].updateValueAndValidity();

    this.profileForm.controls['password'].setValidators([Validators.required]);
    this.profileForm.controls['password'].updateValueAndValidity();

    this.profileForm.controls['zonelist'].setValidators([Validators.required]);
    this.profileForm.controls['zonelist'].updateValueAndValidity();

    this.profileForm.controls['isChecked'].setValidators([Validators.required]);
    this.profileForm.controls['isChecked'].updateValueAndValidity();


 
  
  
  }

  submit(event: Event)
  {
    console.log("update ",this.update);
    if(this.update ==0)
    {this.SetValidation();
     this.addProfile();}

     else
     {
      this.SetValidation();
      this.upateProfile();
     }
 
     
 

 
 
  }


  addProfile()
 {

   if (this.profileForm.invalid) {
     this.profileForm.controls['isChecked'].markAsDirty();
   

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
      firstName: this.profileForm.controls['first'].value,
      lastName: this.profileForm.controls['last'].value,
      domain : "Mobile",
      mobile_no: this.profileForm.controls['mobile'].value, 
      city: this.profileForm.controls['city'].value, 
      address: this.profileForm.controls['address'].value, 
      exposure: this.profileForm.controls['exposure'].value, 
      username: this.profileForm.controls['username'].value,
      password: this.profileForm.controls['password'].value,
      emailaddress: this.profileForm.controls['emailaddress'].value,
      isactive : check,
      createdBy : 1,
      profile_type_id:   this.profileForm.controls['options'].value,
      profile_type:  this.optiontext,
      zoneId:   this.profileForm.controls['zonelist'].value,
     };
    // console.log( this.userNameField.value);
    // console.log( this.passwordField.value);
    // console.log( this.emailField.value);

    this.profileService.addProfile(roleObj)
      .pipe(first())
      .subscribe(response => {
        console.log(response);

             this.snackBar.open(' Record has been added successfully! ','Close', {    
              duration: 4000,    
              horizontalPosition: 'center',
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



  upateProfile()
 {

   if (this.profileForm.invalid) {
     this.profileForm.controls['isChecked'].markAsDirty();
   

       return;
  }
  

  var check:any;
  var password: any;
  if(this.isChecked)
  {
      check = 1;
  }
  else
  {
       check = 0;
  }

  if(this.profileForm.controls['password'].value != "")
  {
    password =  this.profileForm.controls['password'].value;
  }


    
    let roleObj = {
      firstName: this.profileForm.controls['first'].value,
      lastName: this.profileForm.controls['last'].value,
      mobile_no: this.profileForm.controls['mobile'].value, 
      city: this.profileForm.controls['city'].value, 
      address: this.profileForm.controls['address'].value, 
      exposure: this.profileForm.controls['exposure'].value, 
      username: this.profileForm.controls['username'].value,
      password:password,
      emailaddress: this.profileForm.controls['emailaddress'].value,
      isactive : check,
      updatedBy : 1,
      profile_type_id:   this.profileForm.controls['options'].value,
      profile_type:  this.optiontext,
      zoneId:   this.profileForm.controls['zonelist'].value,
     };
    // console.log( this.userNameField.value);
    // console.log( this.passwordField.value);
    // console.log( this.emailField.value);

    this.profileService.addProfile(roleObj)
      .pipe(first())
      .subscribe(response => {
        console.log(response);

             this.snackBar.open(' Record has been added successfully! ','Close', {    
              duration: 4000,    
              horizontalPosition: 'center',
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
     
     Object.keys(this.profileForm!.controls).forEach(key => {
         this.profileForm.get(key)!.setValidators(null);
         this.profileForm.get(key)!.setValue("");
     });
   }

  getprofiles(){
      
     this.profileService.getAllProfile()
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


    getZones(){
 
      this.zoneService.getAllZones()
          .pipe(first())
          .subscribe(response => {
      
           this.zones = response
 
           });
 
  }

}


export interface profileelements {
  
  id:number;
 

  
}


export interface roleitem {
  
  id:number;
  value:string;
 

  
}


  