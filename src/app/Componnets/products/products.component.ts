import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/interfaces/product/iproduct';
import { ProductService } from 'src/app/Shared/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  
  constructor(private _ProductService:ProductService){

  }
  productList:IProduct[]=[]
  ngOnInit(): void {
    this._ProductService.GetAllProducts().subscribe({ 
      next:(ress:any) =>  {
        this.productList = ress._data;
        console.log(ress)
      },
      error:(err) =>{},
      complete:()=>{}
    });
  }

}
