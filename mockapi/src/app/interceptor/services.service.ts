import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  ngOnInit(){
    this.getData()
  }
  getData(){
    let url = "https://demo0498214.mockable.io/profile";
    console.log(this.http.get(url))
    return this.http.get(url)
  }
}
