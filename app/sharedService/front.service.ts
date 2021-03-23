import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Front } from '../model/front';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  private url: string = "../assets/front.json";

  constructor(private httpClient: HttpClient) { }
  getReviews(): Observable<Front[]> {
    return this.httpClient.get<Front[]>(this.url)
  }
}
