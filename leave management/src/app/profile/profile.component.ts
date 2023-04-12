import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pro = localStorage.getItem('name')
  data: any = []
  constructor(private userService: ServicesService, private router: Router) {
    this.userService.getData().subscribe((datan: any) => {
      console.log(datan)
      this.data = datan.data
    })
  }
  id: any;
  onSubmit(ms: any) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.pro == this.data.name) {
        this.id = this.data.id
        this.userService.updateUser(this.id, ms.value).subscribe({
          complete: () => {
            this.router.navigateByUrl("/leavelist");
          }
        }
        )
      }
    }
  }
  ngOnInit(): void {
  }
}
