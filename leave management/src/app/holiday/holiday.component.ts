import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {


  holiday: any[] = [];
  holidayArr: any = {
    holidayId: 0,
    date: '',
}

cdel:any=[];


  constructor(private router:Router) { }

  ngOnInit(): void {
    const localData=localStorage.getItem('holidayList');
    if(localData!=null)
    {
      this.holiday=JSON.parse(localData);
    }

    const localUser=localStorage.getItem('edit');
    if(localUser!=null)
    {
      localStorage.removeItem('edit')
    }
  }


  onDel(id:any){
    this.cdel[id]=true;

  }

  onCancel(id:any){
    this.cdel[id]=false;
  }



  addHoliday() {
    this.router.navigate(['/createHoliday'])

  }




  onEdit(data:any)
  {
    
    localStorage.setItem("edit",JSON.stringify(data))
    this.router.navigate(['/editHoliday'])
  
  }

  onDelete(id:any)
  {
    for(let i=0;i<this.holiday.length;i++)
    {
      if(this.holiday[i].holidayId==id)
      {
        this.holiday.splice(i,1);
      }
    }
    localStorage.setItem('holidayList',JSON.stringify(this.holiday))

  }

}
