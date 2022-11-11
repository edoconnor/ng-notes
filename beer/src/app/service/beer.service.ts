import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private url = 'https://api.openbrewerydb.org/breweries';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }
}
