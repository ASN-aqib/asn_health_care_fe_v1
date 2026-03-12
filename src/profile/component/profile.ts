import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProfileService } from '../service/profile';
import { first } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,MatFormFieldModule,MatTableModule, MatInputModule,
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
  public dataSource = new MatTableDataSource<profileelements>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild("paginator") paginator!: MatPaginator;

  
  readonly first = new FormControl('', [Validators.required]);
  readonly last = new FormControl('', [Validators.required]);
  readonly emailaddress = new FormControl('', [Validators.required]);
  readonly mobile = new FormControl('',);
  readonly city = new FormControl('',);
  readonly address = new FormControl('',);
  readonly exposure = new FormControl('',);

  public  profiledata: any = [];
  DisplayedColumns: string[] = [
    'id', 'firstName','lastName', 
  ];

  constructor( private profileService:ProfileService) {}
 
   ngOnInit(): void {
    this.getprofiles();
    
   }


    ngAfterViewInit(): void {
  //  this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }




  getprofiles()
    {
      
     this.profileService.getAllProfile()
          .pipe(first())
          .subscribe(response => {
      
              this.profiledata = response

              console.log(this.profiledata)
  
           this.dataSource = new MatTableDataSource(this.profiledata);
           this.dataSource.paginator = this.paginator;
                 
  
           });
    }

}


export interface profileelements {
  
  id:number;
 
  

  
}
