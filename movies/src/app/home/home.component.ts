import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any=[]
  details:any=[]
  p:any;
  constructor(private movieService:ServiceService,private router :Router) { 
    this.movieService.getData().subscribe((datan: any) => {
      console.log(datan)
      this.data = datan.images
    })
    this.movieService.getMovieDetails().subscribe((x:any)=>{
      console.log(x)
      this.details=x;
    })
  }

  ngOnInit(): void {
  }

  
}
