import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  apiKey = 'D0Bmcl1rnb6rGbEt0eb7BcnbNcXHBNFgcon6Fu8F';
  startDate = '2015-09-07';
  endDate = '2015-09-08';
  constructor(private http: HttpClient) { }

  getList() {
    const fullUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.startDate}&end_date=${this.endDate}&api_key=${this.apiKey}`;
    return this.http.get(fullUrl);
  }

  search(id) {
    const fullUrl = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${this.apiKey}`;
    return this.http.get(fullUrl);
  }

}
