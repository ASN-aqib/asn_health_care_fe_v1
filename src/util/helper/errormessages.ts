import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';


 

@Injectable({providedIn: 'root'})
export class errormessages {

constructor(private snackBar: MatSnackBar) {}



ShowError()
{
    this.snackBar.open('Created Successfully !','Close', {    
              duration: 3000,    
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'custom-style',
            })
        }
    
}

   