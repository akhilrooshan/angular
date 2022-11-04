import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const localData=localStorage.getItem('holidayList');
    if(localData!=null)
    {
      this.holiday=JSON.parse(localData);
    }
  }
  holiday: any[] = [];
  holidayArr: any = {
    holidayId: 0,
    date: '',




  }


  addHoliday() {
    const notNull = document.getElementById('holidayModal ');
    if (notNull != null) {
      notNull.style.display = ' block';
    }
  }



  onCloseModel() {
    const notNull = document.getElementById('holidayModal ' );
    if (notNull != null) {
    notNull.style.display = ' none' ;
    }
    this.holidayArr={
      holidayId:0,
      date:'',
    reason:'',
 
     }
     window.location.reload()
    }
  onSubmit(data:any)
  {

    this.holidayArr.holidayId=this.holiday.length+1;
     this.holiday.push(this.holidayArr)
     this.onCloseModel();
     localStorage.setItem('holidayList',JSON.stringify(this.holiday))
     this.holidayArr={
      holidayId:0,
      date:'',
    reason:'',
   
     }
  }

  onEdit(data:any)
  {
    
    this.addHoliday();
    this.holidayArr=data;
  }
  onUpdate()
  {
    const record=this.holiday.find(x=>x.holidayId==this.holidayArr.holidayId);
    record.date=this.holidayArr.date;
    record.reason=this.holidayArr.reason;
 
    localStorage.setItem('holidayList',JSON.stringify(this.holiday))

    this.onCloseModel;

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
