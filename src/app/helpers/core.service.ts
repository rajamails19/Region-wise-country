import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private url = 'https://restcountries.eu/rest/v2/region/';
  constructor(private http: HttpClient) { }

  getCountry(region) {
    return this.http.get(this.url + `${region}`).toPromise().then(response => {
      return response;
    })
  }
}
