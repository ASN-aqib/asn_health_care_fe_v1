import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
 import { WebConstants } from '../../util/web.constants';
import { LoginModel } from '../../auth/model/login';
import { finalize, first, throwError } from 'rxjs';
import { Authservice } from '../../auth/service/authservice';
import { TokenStorage } from '../../util/token.storage';
import { CommonModule } from '@angular/common';
 import { catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,  CommonModule,MatProgressSpinnerModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
 
})


export class Login implements OnInit {
  public loginForm!: FormGroup;
  button = 'Log In'
  isLoading = true;
  typeSelected!: string;

   isShow = true;
 // authService = inject(Authservice);
  router = inject(Router);
  
 
  constructor(  
    public formBuilder: FormBuilder, 
    //public cookieService: CookieService
    private autherservice :Authservice,
    public tokenStorage: TokenStorage,
    private snackBar: MatSnackBar,
       )
  {
     this.typeSelected = 'ball-fussion';
  }


   
  
  ngOnInit(): void {
   // alert('hit it');

    // if (this.tokenStorage.getToken() !== null) {
    //   this.router.navigate([WebConstants.WEB_URL.MAP]);
    // }
   
    this.initializeForm();
  }

  
initializeForm() {
      this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });

     
  }
 
  // public onSubmit(): void {
    
  // }
  
  onSubmit() {
    this.isLoading = true;
    this.button = 'Processing';

 
    try{

    if (this.loginForm.invalid) {
      return;
    }

    let loginObject = new LoginModel();

    console.log(" email", this.loginForm.controls['username'].value);
     
    loginObject.username = this.loginForm.controls['username'].value;
    loginObject.password = this.loginForm.controls['password'].value;

    console.log(loginObject);
    this.autherservice.login(loginObject)

    //==== ============457  and  468 Open Project Id i fixed the issue in this code =============//
      .pipe(first(),
     
           catchError(this.handleError.bind(this))

      )
       .subscribe(response => {
        this.isLoading = false;
        this.button = 'Log In';
        this.isShow = false;
        this.router.navigate([WebConstants.WEB_URL.DASHBOARD]);
       

        // if (response.code === WebConstants.STATUS.CODE_SUCCESS) {

        //   // =========================426 and 468 Open project id ================//
        //   if (this.loginForm.value.rememberMe) {
            
        //   //   this.cookieService.set('username', loginObject.username);
        //   //   this.cookieService.set('password', loginObject.password);
            
        //   // } else {
        //   //   this.cookieService.delete('username');
        //   //   this.cookieService.delete('password');
          
        //   }
        //   // =========================== 426 and 468 End here  open project it =====================//
        //   this.router.navigate([WebConstants.WEB_URL.DASHBOARD]);
        // }
     
      });
      
    }
    catch(error){
     alert(error)
    }
   
           
  }


  opensnackbar()
  {
    
      this.snackBar.open(' Invalid user name or password ','Close', {    
              duration: 4000,    
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'custom-style',
            });
  }

    private handleError(error: HttpErrorResponse) {

       
      
    if (error.status === 0) {
      console.error('Network error:', error.error)
    } else {
  
      this.opensnackbar();
      console.error(`Backend returned code ${error.status}, body:`, error.error)
    }
    return throwError(() => new Error('Something went wrong; please try again later.'))
  }

}
