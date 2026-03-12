import { Component, OnInit } from '@angular/core';
import { Transactionservice } from '../../services/transactionservice';

@Component({
  selector: 'app-transaction',
  imports: [],
  templateUrl: './transaction.html',
  styleUrl: './transaction.css',
})
export class Transaction implements OnInit {


  constructor(private transactionService:Transactionservice){}


    ngOnInit(): void {

  }

}
