import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  productName: string;
  bestBeforeDate: Date;
  qualityCode: string;
  lotNumber: string;
  [key: string]: string | Date;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: Product[] = [
    // Add your sample data here
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
