import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
 import { first } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransporterService } from '../../services/transporter.service';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
    imports: [ CommonModule,MatDialogModule ],
})
export class ConfirmationDialog {
  title!: string;
  message!: string;
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>,
              private tranService:TransporterService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any) { }


  cancel(): void {
    this.dialogRef.close(true);
  }


  submit(event: Event)
  {
    console.log(this.data.userid);
       this.tranService.delete(this.data.id)
      .pipe(first())
      .subscribe(response => {

 
        this.snackBar.open(' Record has been deleted successfully! ','Close', {    
              duration: 4000,    
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'custom-style',
            });

       this.dialogRef.close(true);
      });
  }
}