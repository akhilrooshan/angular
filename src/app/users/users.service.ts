// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor() { }
// }
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
    let url = "https://dummyapi.io/data/v1/user?page=1&limit=90";
    return this.http.get(url,{
      headers:new HttpHeaders({
        'app-id':'634e43cccedbf3033c3861ca'
      })
    })
  }
}
