import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient ) { 
    this.getData()
  }

  getData() {
    let url = "http://localhost:8701/api/movies/desi";
    console.log(this.http.get(url))
    return this.http.get(url)
  }
}
