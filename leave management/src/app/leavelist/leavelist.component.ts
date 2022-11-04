import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent implements OnInit {

  checkname=localStorage.getItem('name')
  confirm:any[]=[]

  holiday:any[]=[]

  leave:any[]=[]

  leaveArr:any={
    leaveId:0,
    leavedate:'',
    leavereason:''
  }



  constructor() { }

  ngOnInit(): void {
    const localData=localStorage.getItem('leaveReq');
    if(localData!=null)
    {
      this.leave=JSON.parse(localData);
    }


    const localConfirm=localStorage.getItem('approved');
    if(localConfirm!=null)
    {
      this.confirm=JSON.parse(localConfirm);
    }

    const localHoliday=localStorage.getItem('holidayList');
    {
      if(localHoliday!=null)
      {
        this.holiday=JSON.parse(localHoliday);
      }
    }
  }


  addLeave() {
    const notNull = document.getElementById('leaveModal ');
    if (notNull != null) {
      notNull.style.display = ' block';
    }
  }


  onCloseModel() {
    const notNull = document.getElementById('leaveModal ' );
    if (notNull != null) {
    notNull.style.display = ' none' ;
    }
    this.leaveArr={
      leaveId:0,

      leavedate:'',
      leavereason:''
    }
     window.location.reload()
    }
  onSubmit(data:any)
  {
    
    this.leaveArr.leaveId=this.leave.length+1;
    this.leaveArr.name=localStorage.getItem('name')
     this.leave.push(this.leaveArr)
     this.onCloseModel();
     localStorage.setItem('leaveReq',JSON.stringify(this.leave))
     this.leaveArr={
      leaveId:0,
      leavedate:'',
      leavereason:''
    }
  
  }

  onEdit(data:any)
  {
    
    this.addLeave();
    this.leaveArr=data;
  }
  onUpdate()
  {
    const record=this.leave.find(x=>x.leaveId==this.leaveArr.leaveId);
    record.date=this.leaveArr.date;
    record.reason=this.leaveArr.reason;
 
    localStorage.setItem('leaveReq',JSON.stringify(this.leave))

    this.onCloseModel();

  }

  onDelete(id:any)
  {
    for(let i=0;i<this.leave.length;i++)
    {
      if(this.leave[i].leaveId==id)
      {
        this.leave.splice(i,1);
      }
    }
    localStorage.setItem('leaveReq',JSON.stringify(this.leave))

  }



}



