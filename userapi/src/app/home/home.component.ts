import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  title = 'api';
  p: any;
  data: any = []
  item: any;
 

  constructor(private userservice: ServiceService,private router: Router) { 

  this.userservice.getData().subscribe((datan: any) => {
    console.log(datan)

    this.data = datan.data
  })
  }


  ngOnInit(){
   
  }

  deleteItem(item: { id: number; }){
    this.userservice.deleteUser(item.id)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
    
          complete: () => {
            this.router.navigateByUrl("/");
          }
        });
  }
  


}



