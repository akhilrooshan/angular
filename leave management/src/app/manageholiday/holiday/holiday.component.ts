import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  holiday: any[] = [];
  constructor(private router:Router) {
   }
  ngOnInit(): void {
    const localHolidayData=localStorage.getItem('holidayList');
    if(localHolidayData!=null)
    {
      this.holiday=JSON.parse(localHolidayData);
    }
    const localUser=localStorage.getItem('edit');
    if(localUser!=null)
    {
      localStorage.removeItem('edit')
    }
  }
  /*
@description:redirects to delete page
  */
  onDel(id:any){
    localStorage.setItem("edit",JSON.stringify(id))
    this.router.navigate(['/deleteHoliday'])
  }
   /*
@description:redirects to create holiday page
  */
  addHoliday() {
    this.router.navigate(['/home/holiday/createHoliday'])
  }
   /*
@description:redirects to on edit page
  */
  onEdit(data:any)
  {
    localStorage.setItem("edit",JSON.stringify(data))
    this.router.navigate(['/home/holiday/editHoliday'])
  }
}
