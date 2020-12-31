import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddOrderService } from 'src/Services/add-order.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userviews:[];
  
  constructor(private getOrders:AddOrderService) {
    this.getOrders.getOrder();
   }

  ngOnInit(): void {
  }

}
