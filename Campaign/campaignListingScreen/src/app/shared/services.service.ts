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
    let url = "http://localhost:8700/api/campaigns";
    console.log(this.http.get(url))
    return this.http.get(url)
  }
  addData(body:any){
    let url = "http://localhost:8700/api/campaigns/create";
    return this.http.post(url,body)
    }
    updateCampaignData(id:any,body:any)
    {
      let url="http://localhost:8700/api/campaigns/"+id
      return this.http.put(url,body)
    }
}
