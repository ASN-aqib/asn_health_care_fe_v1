import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
 import { WebConstants } from '../../util/web.constants';
import { LoginModel } from '../../auth/model/login';
import { finalize, first } from 'rxjs';
import { Authservice } from '../../auth/service/authservice';
 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
 
})


export class Login implements OnInit {
  public loginForm!: FormGroup;
  button = 'Log In'
   isLoading = true;

   isShow = true;
 // authService = inject(Authservice);
  router = inject(Router);
  
 
  constructor(  
    public formBuilder: FormBuilder, 
    //public cookieService: CookieService
    private autherservice :Authservice
     )
  {}


   
  
  ngOnInit(): void {
    alert('hit it');
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
      finalize(() => { 
        this.isLoading = false;
        this.button = 'Log In'; 
      })//========================  457  and  468 Open Project Id   end here==================//
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
     alert("UnAuthorized!")
    }
   
           
  }

   

}
