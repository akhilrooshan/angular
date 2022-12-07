import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/services.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  camapaignData: any = []
  constructor(private service: ServicesService, private router: Router) {
  }
 /**
  * @description:abcdef
  */
  ngOnInit(): void {
    this.getDataApi()
  }
  displayedColumns = ['id', 'campaignName', 'status', , 'Ctr', 'startDate'];
  newcampaign() {
    this.router.navigate(['home'])
  }
  getDataApi() {
    this.service.getData().subscribe((datan: any) => {
      this.camapaignData = datan.data
    })
  }
}
