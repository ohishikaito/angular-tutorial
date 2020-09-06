import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product){
    this.items.push(product)
    // console.log("w");
  }

  getItems(){
    // console.log("g");
    return this.items;
  }

  clearCart(){
    console.log(this.items);
    this.items = [];
    console.log(this.items);
    // return this.items;
  }

  getShippingPrices(){
    return this.http.get('../assets/shipping.json');
  }
}