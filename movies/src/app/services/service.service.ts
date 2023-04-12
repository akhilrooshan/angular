import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 

    this.getData()
  }

  getData(){
    let url = "https://demo6014449.mockable.io/movies";
    console.log(this.http.get(url))
    return this.http.get(url)
  }

  getMovieDetails(){
    let url = "https://demo6014449.mockable.io/moviedetails";
    console.log(this.http.get(url))
    return this.http.get(url)
  }
}
