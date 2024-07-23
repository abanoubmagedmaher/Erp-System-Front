import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/interfaces/product/iproduct';
import { ProductService } from 'src/app/Shared/services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  
  constructor(){}
  @Input() Product?:IProduct
  ngOnInit(): void {
  
  }
}
