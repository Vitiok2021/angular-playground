import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderResponse } from '../../entities/order/order.model';
import { ApiService } from '../../shared/api/api.service';

@Component({
  selector: 'app-orders-page',
  imports: [RouterLink],
  templateUrl: './orders-page.html',
  styleUrl: './orders-page.scss',
})
export class OrdersPage implements OnInit {
  readonly orders = signal<OrderResponse[]>([]);
  apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getOrders().subscribe({
      next: (response) => {
        this.orders.set(response);
        console.log(this.orders());
      },
    });
  }
}
