import {ChangeDetectionStrategy, Component, OnInit, signal, ViewChild} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
 import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RoleService } from '../service/roleservice';
import { first } from 'rxjs';

@Component({
  selector: 'app-role',
  imports: [MatFormFieldModule,MatTableModule, MatInputModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './role.html',
  styleUrl: './role.css',
})
export class Role implements OnInit {
  public dataSource = new MatTableDataSource();

  readonly rolefield = new FormControl('', [Validators.required]);
  readonly description = new FormControl('', [Validators.required]);

  displayedColumns: string[] = ['position', 'role'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  errorMessage = signal('');

  constructor(private rolservice: RoleService) {
     
  }

    ngOnInit(): void {
   
      this.getAllRoles();
  }


  // updateErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage.set('You must enter a value');
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage.set('Not a valid email');
  //   } else {
  //     this.errorMessage.set('');
  //   }
  // }


    getAllRoles(): void {
    this.rolservice.getAllRoles()
      .pipe(first())
      .subscribe(response => {

        console.log(response);
        // if (response && response.code === WebConstants.STATUS.CODE_SUCCESS) {
        //   this.parkingSpots = response.data;
        //   this.dataSource = new MatTableDataSource<unknown>(this.parkingSpots);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //   //console.log("response ",response.data);
        // } else {
        //   this.toastrService.error(response.value, "Failed To Load Data!")
        // }
      });
  }

}
