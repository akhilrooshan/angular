import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http:HttpClient) {
    // this.getData();
   }
  getData() {
    let url = "https://demo6014449.mockable.io/campaign";
    console.log(this.http.get(url))
    return this.http.get(url)
  }
}
