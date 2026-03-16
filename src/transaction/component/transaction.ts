import { Component, OnInit, ViewChild } from '@angular/core';
import { Transactionservice } from '../../services/transactionservice';
import { first } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transaction',
  imports: [CommonModule,MatFormFieldModule,MatTableModule, MatInputModule,
     FormsModule,MatSelectModule,MatPaginator,MatPaginatorModule,
     MatTableModule, MatCardModule,
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './transaction.html',
  styleUrl: './transaction.css',
})
export class Transaction implements OnInit {

  pageSize = 10;
  pageIndex = 0;
  public dataSource = new MatTableDataSource<transactionelements>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild("paginator") paginator!: MatPaginator;

  

  public  transactiondata: any = [];
  DisplayedColumns: string[] = [
    'createdDate','categoryName','quantity','price','buyerName' ,'sellerName','commissionAmount','commissionPercentage','action'
  ];

  constructor(private transactionService:Transactionservice){}


    ngOnInit(): void {


      this.getAll();

      }


        
 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getAll()
  {
       this.transactionService.getAll()
          .pipe(first())
          .subscribe(response => {
      
              this.transactiondata = response

              console.log(this.transactiondata)
  
           this.dataSource = new MatTableDataSource(this.transactiondata);
           this.dataSource.paginator = this.paginator;
                 
  
           });
    }


    
  }
 
export interface transactionelements {
  
  id:number;
  created_date:string;
 
  

  
}
