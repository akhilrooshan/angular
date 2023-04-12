import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/services.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  color="rgba(196, 196, 196, 0.324)"
  chartVisible = false
  completedCount: any
  camapaignData: any = []
  tokenString: any = []
  displayedColumns = ['id', 'campaignName', 'status', 'Ctr', 'startDate', 'action'];
  Highcharts: typeof Highcharts = Highcharts;
  data: any = []
  options: Highcharts.Options
  constructor(private service: ServicesService, private router: Router, private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog) {
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;
  /**
   * @description:abcdef
   */
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.gettokenApi()
    this.getDataApi()
  }
  newcampaign() {
    this.router.navigate(['home'])
  }
  /**
   * @description:function to get data ,sort,paginate the data from api
   */
  getDataApi() {
    try {
      const tokenObj = {
        token: localStorage.getItem('token')
      }
      this.service.getData().subscribe((nData: any) => {
        this.camapaignData = new MatTableDataSource(nData.data)
        this.camapaignData.sort = this.sort
        this.camapaignData.paginator = this.paginator
        this.data = [
          ['Completed', this.getCount("Completed", nData.data)],
          ['Pending', this.getCount("Pending", nData.data)],
          ['Draft', this.getCount("Draft", nData.data)],
        ];
        this.PiechartOptions()
      })
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * 
   * @param id :id which belongs to the column which needs to be update
   * @param data : whether current status is pending,completed or draft
   */
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
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.camapaignData.filter = filterValue.trim().toLowerCase();
  }
  /**
   * @description:to generate token for the api
   */
  gettokenApi() {
    const user = {
      username: "admin",
      password: "admin"
    }
    this.service.getToken(user).subscribe((token: any) => {
      this.tokenString = token
      localStorage.setItem('token', this.tokenString.token)
    })
  }
  /**
   * 
   * @param id :id which belongs to the column which needs to be update
   * @param status :whether current status is pending,completed or draft
   * @description:to open the dialogue box
   */
  openDialog(id: any, status: string) {
    const dialogRef = this.dialog.open(ConfirmDialogueComponent
      , {
        data: {
          message: 'Are you sure want to Change?',
          buttonText: {
            ok: 'Save',
            cancel: 'No'
          }
        }
      });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.changeStatus(id, status)
      }
    });
  }
  /**
   * 
   * @param charecter :define which status condition
   * @param data :campaign data array
   * @returns :no of times the reffered status is in the server
   */
  getCount(charecter: any, data: any) {
    return data.filter((obj: { status: any; }) => obj.status === charecter).length;
  }
  /**
   * @description:options definition piechart
   */
  PiechartOptions() {
    this.options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie chart with Status details',
      },
      subtitle: {
        text: 'Select data point to display details',
      },
      plotOptions: {
        pie: {
          slicedOffset: 20,
          allowPointSelect: true,
          point: {
          }, colors: [ 'rgba(39, 203, 105, 0.587)','rgba(9, 186, 171, 0.521)', 'rgba(211, 206, 189, 0.587)']
        },
      },
      series: [
        {
          type: 'pie',
          id: 'data',
          name: 'count',
          data: this.data,
          innerSize: '0%',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      ],
      legend: {
        enabled: true,
        align: 'left',
        layout: 'vertical',
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal',
              },
            },
          },
        ],
      },
    };
  }
}
