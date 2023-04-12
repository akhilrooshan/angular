import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private userService: ServiceService,
    private router: Router,private route:ActivatedRoute) {
  }
  id:any;
  onSubmit(data:any){
    this.id =  this.route.snapshot.paramMap.get('id'); 
    


    this.userService.updateUser(this.id,data.value).subscribe({
      

      complete: () => {
        this.router.navigateByUrl("");
      }
    }
    )
  }


  ngOnInit(): void {
  }

}
