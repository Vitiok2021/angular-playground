import { inject, Injectable } from '@angular/core';
import { ProductCard } from '../interfaces/product-card';
import { HttpClient } from '@angular/common/http';
import {
  ProductCharacteristics,
  ProductDetails,
} from '../interfaces/product-details';
import { forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  getProducts() {
    return this.http.get<ProductCard[]>(
      'https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/fishing-store',
    );
  }

  getProductFullInfo(id: string) {
    const mainInfo$ = this.http.get<ProductCard>(
      `https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/fishing-store/${id}`,
    );

    const extraInfo$ = this.http.get<{
      id: string;
      details: ProductCharacteristics;
    }>(
      `https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/product-details/${id}`,
    );

    return forkJoin({
      main: mainInfo$,
      extra: extraInfo$,
    }).pipe(
      map((response) => {
        const fullProduct: ProductDetails = {
          ...response.main,
          details: response.extra.details,
        };
        return fullProduct;
      }),
    );
  }

  addProduct(product: Omit<ProductDetails, 'id'>) {
    const { details, ...mainInfo } = product;
    return this.http
      .post(
        'https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/fishing-store',
        mainInfo,
      )
      .pipe(
        switchMap((response: any) => {
          return this.http.post(
            'https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/product-details',
            { details, id: response.id },
          );
        }),
      );
  }
  updateProduct(id: string, product: Omit<ProductDetails, 'id'>) {
    const { details, ...mainInfo } = product;
    return this.http
      .put(
        `https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/fishing-store/${id}`,
        mainInfo,
      )
      .pipe(
        switchMap((response: any) => {
          return this.http.put(
            `https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/product-details/${id}`,
            { details },
          );
        }),
      );
  }
  delProduct(id: string) {
    const mainInfo$ = this.http.delete(
      `https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/fishing-store/${id}`,
    );

    const extraInfo$ = this.http.delete(
      `https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/product-details/${id}`,
    );
    return forkJoin({
      main: mainInfo$,
      extra: extraInfo$,
    });
  }
}
