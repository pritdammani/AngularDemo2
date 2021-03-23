import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Back } from '../model/back';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private url: string = "../assets/back.json";

  constructor(private httpClient: HttpClient) { }
  getCourses(): Observable<Back[]> {
    return this.httpClient.get<Back[]>(this.url)
  }
}
