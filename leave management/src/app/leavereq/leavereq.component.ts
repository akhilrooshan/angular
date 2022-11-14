import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.css']
})
export class LeavereqComponent implements OnInit {
  name=localStorage.getItem('name')

  cdel:any=[];
  cupd:any=[]
  constructor() { }

  ngOnInit(): void {
    const localData=localStorage.getItem('leaveReq');
    if(localData!=null)
    {
      this.leave=JSON.parse(localData);
     
    }

    const localapprove=localStorage.getItem('approved');
    if(localapprove!=null)
    {
      this.confirm=JSON.parse(localapprove);
      
    }

    
  }

  confirm:any[]=[]

  leaveArr:any={
    leaveId:0,
    username:'',
    leavedate:'',
    leavereason:''
  }


  leave:any[]=[]


  onApprove(data:any)
  {
    this.leaveArr=data;
    const record=this.leave.find(x=>x.leaveId==this.leaveArr.leaveId);
    record.leavedate=this.leaveArr.leavedate;
    record.leavereason=this.leaveArr.leavereason;
    record.leaveId=this.leaveArr.leaveId;
    this.confirm.push(record)
  
    localStorage.setItem('approved',JSON.stringify(this.confirm))
    this.onDelete(this.leaveArr.leaveId)

  

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
  onUpd(id:any)
  {
    
    this.cupd[id]=true;
    
  }

  onDel(id:any){
    this.cdel[id]=true;

  }

  onCancel(id:any){
    this.cdel[id]=false;
    this.cupd[id]=false;
  }
 
}
