import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  ngOnInit(){
    this.getData
  }
  getData(){
    let url = "https://dummyapi.io/data/v1/user?page=1&limit=99";
    return this.http.get(url)
  }
  adduser(body:any){

    let url = "https://dummyapi.io/data/v1/user/create";

    return this.http.post(url,body)
  
    }

    deleteUser(id:any)
    {
      let url="https://dummyapi.io/data/v1/user/"+id
      return this.http.delete(url,id)
    }

    updateUser(id:any,body:any)
    {
      let url="https://dummyapi.io/data/v1/user/"+id
      return this.http.put(url,body)
    }
}