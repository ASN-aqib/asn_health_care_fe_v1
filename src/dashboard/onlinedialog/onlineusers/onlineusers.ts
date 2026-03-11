import { ChangeDetectionStrategy,AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Useractivityservice } from '../../../services/useractivityservice';
import { first } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onlineusers',
  standalone: true,
  imports: [ CommonModule, MatPaginator,MatPaginatorModule,
    MatTableModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,
    MatCardModule ],

  //changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './onlineusers.html',
  styleUrl: './onlineusers.css',
})
export class Onlineusers implements OnInit {

  pageSize = 10;
  pageIndex = 0;
  public dataSource = new MatTableDataSource<activityelements>();
 

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild("paginator") paginator!: MatPaginator;
   
  
  constructor(private userActivityService:Useractivityservice){}
 


  
  
  public online: any =[];
  

    DisplayedColumns: string[] = [
    'id', 'user_name' ,'email_address' , 'profile_type','created_date', 'action'
  ];

  
    ngOnInit(): void {
    
        this.getAll();
  
    }


 ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

    getAll()
    {
      
     this.userActivityService.getAll()
          .pipe(first())
          .subscribe(response => {

         this.online = response

         console.log(this.online);
         this.dataSource = new MatTableDataSource(this.online);
         this.dataSource.paginator = this.paginator;


         
         });
  }


}


export interface activityelements {
  
  id:number;
  user_name:string;
  email_address:string;
  profile_type:string;
  created_date:string;
  

  
}
