import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit{

  orders

  constructor(public orderService: OrderService) { }
  
  ngOnInit(): void {
    this.orderService.get({}).subscribe(res => {
      if(res?.data?.orders){
        this.orders = res.data.orders
      }
    })
  }

  deleteOrder(order) : void {
    if(confirm('Are You Sure?')){
      this.orderService.deleteById(order._id).subscribe(res => {
        if(res?.data?.success){
          this.orders = this.orders.filter(o=>o._id !== order._id)
        }
      })
    }
  }

}
