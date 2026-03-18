import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StatementService } from '../../services/statement-service';
import { first } from 'rxjs';

@Component({
  selector: 'app-statement',
  imports: [CommonModule,MatFormFieldModule,MatTableModule, MatInputModule,
       FormsModule,MatSelectModule,MatPaginator,MatPaginatorModule,
       MatTableModule, MatCardModule,
       ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './statement.html',
  styleUrl: './statement.css',
})
export class Statement implements OnInit {

  
 
  pageSize = 10;
  pageIndex = 0;  
  public dataSource = new MatTableDataSource<statementelements>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild("paginator") paginator!: MatPaginator;

  

  public  statmentdata: any = [];
  DisplayedColumns: string[] = [
    'createdDate','categoryName','quantity','price','buyerName' ,'sellerName',
    'commissionAmount','commissionPercentage'
    // ,'action'
  ];


  constructor(private statmentService:StatementService) {}


  
    ngOnInit(): void {


      this.getAll();

   }


    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




   getAll()
    {
         this.statmentService.getAll()
            .pipe(first())
            .subscribe(response => {
        
             this.statmentdata = response
  
             console.log(this.statmentdata)
    
             this.dataSource = new MatTableDataSource(this.statmentdata);
             this.dataSource.paginator = this.paginator;
                   
    
             });
      }
  
       
  }
  
export interface statementelements {
  
  id:number;
  created_date:string;
 
  

  
}