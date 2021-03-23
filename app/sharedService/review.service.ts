import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url: string = "../assets/review.json";
 
  constructor(private httpClient: HttpClient) { }
  getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.url)
  }
}
