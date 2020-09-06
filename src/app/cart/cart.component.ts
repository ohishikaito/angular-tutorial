import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items;
  chekcoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.chekcoutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
  }

  clearCart(){
    this.cartService.clearCart();
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.chekcoutForm.reset();
    console.warn('onSubmit', customerData)
  }

}