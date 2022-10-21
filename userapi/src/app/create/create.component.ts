import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private userService: ServiceService,
    private router: Router) {
  }
  onSubmit(data: any) {
    console.log("Submitted Data", data.value);
    this.userService.adduser(data.value).subscribe({
      next: (data: any) => {
        console.log(data);
      },

      complete: () => {
        this.router.navigateByUrl("/");
      }
    }
    )
  }


ngOnInit(): void {
}


}
