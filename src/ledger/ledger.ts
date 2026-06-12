 import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Ledgerservice } from '../services/ledgerservice';
import { ZoneService } from '../services/zone.service';
import { TransporterService } from '../services/transporter.service';


@Component({
  selector: 'app-ledger',
  imports: [CommonModule,MatFormFieldModule,MatTableModule, MatInputModule,
     FormsModule,MatSelectModule,MatPaginator,MatPaginatorModule,
     MatTableModule, MatCardModule,
     ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ledger.html',
  styleUrl: './ledger.css',
})
export class Ledger  implements OnInit {

  optiontext: any;
  pageSize = 10;
  pageIndex = 0;
  public  zones: any = [];
  public  transporters: any = [];
  public dataSource = new MatTableDataSource<transactionelements>();

   public ledgerForm!: FormGroup;


@ViewChild(MatSort) sort!: MatSort;
@ViewChild("paginator") paginator!: MatPaginator;
@ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  

  public  ledgerdata: any = [];
  DisplayedColumns: string[] = [
    'created_date',
     'description','debit','credit','balance'   
  ];

  constructor(private ledgerService:Ledgerservice, private  transportService:TransporterService ,private zoneService:ZoneService ,
      public formBuilder: FormBuilder, 
  ){}


    ngOnInit(): void {

    this.initializeForm();
    
    this.getTransporters();
      // this.getZones();
 
      }

 

      
  selectedTransporter(event: MatSelectChange) {
 
 
   
    this.optiontext  = event.source.value;
 
    console.log(this.optiontext);
     this.getAll(this.optiontext);
  
}


   initializeForm() {
      this.ledgerForm = this.formBuilder.group({
    
      transporterlist:['', Validators.required],
    
      
      // licenseno :  new FormControl({ value: "", disabled: true }),      

      
       

    });

  }


  
        
 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getAll(transporterid:number)
  {
       this.ledgerService.getAll(transporterid)
          .pipe(first())
          .subscribe(response => {
      
              this.ledgerdata = response

              console.log(this.ledgerdata)
  
           this.dataSource = new MatTableDataSource(this.ledgerdata);
           this.dataSource.paginator = this.paginator;
                 
  
           });
    }




    getZones(){
 
      this.zoneService.getAllZones()
          .pipe(first())
          .subscribe(response => {
      
            
           this.zones = response

 
           });
 
      }

      getTransporters()
      {
         this.transportService.getAllTransporters()
          .pipe(first())
          .subscribe(response => {
            console.log(response);
           this.transporters = response

 
           });


      }


    
  }
 
export interface transactionelements {
  
  id:number;
  created_date:string;
 
  

  
}

