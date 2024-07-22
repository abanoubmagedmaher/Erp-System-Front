import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/product/iproduct';
import { Paging } from '../../interfaces/paging';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
   apiUrl = "https://localhost:7132"
   GetAllProducts():Observable<Paging<IProduct[]>>{
    return this._HttpClient.get<Paging<IProduct[]>>(`${this.apiUrl}/api/Product/GetAllProducts?Search=p`)
    }
}
