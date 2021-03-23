import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductwjsonService {

  private url: string = "../assets/product.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url)
  }
}
