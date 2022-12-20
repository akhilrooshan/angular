import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
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
  displayedColumns = ['id', 'campaignName', 'status', 'Ctr', 'startDate', 'action'];
  newcampaign() {
    this.router.navigate(['home'])
  }
  getDataApi() {
    try {
      this.service.getData().subscribe((nData: any) => {
        this.camapaignData = nData.data
        this.camapaignData=this.camapaignData.sort((a:any,b:any) => b.id - a.id)
      })
    } catch (error) {
      console.log(error)
    }
  }
  changeStatus(id: any, data: any) {
    const obj = {
      status: data
    }
    this.service.updateCampaignData(id, obj).subscribe
      ({
        next: (data: any) => {
          console.log(data);
         this.getDataApi()
        },
      }
      )
  }
}
