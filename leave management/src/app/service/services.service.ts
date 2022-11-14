import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  user:any[]=[];
  usersArray:any={
    userId:0,
  username:'',
    Email:'',
    phone:'',
  }
  constructor(private http:HttpClient) { 
    this.getData()
  }
  getData(){
    let url = "https://demo0498214.mockable.io/profile";
    console.log(this.http.get(url))
    return this.http.get(url)
  }

  

  onCreateUser(nn:any) {
    
    const notNull = document.getElementById(nn);
    if (notNull != null) {
    notNull.style.display = ' block' ;
    }
    }

    onEdit(data:any)
    {
      
      this.onCreateUser(data.id);
      this.usersArray=data;
    }



    updateUser(id:any,body:any)
    {
      let url="https://demo0498214.mockable.io/profile"+id
      return this.http.put(url,body)
    }

}
