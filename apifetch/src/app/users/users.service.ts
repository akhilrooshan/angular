import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  ngOnInit(){
    this.getData
  }
  getData(){
    let url = "https://dummyapi.io/data/v1/post?limit=10";
    return this.http.get(url,{
      headers:new HttpHeaders({
        'app-id':'634f7dae1447b9ee8714846b'
      })
    })
  }
}