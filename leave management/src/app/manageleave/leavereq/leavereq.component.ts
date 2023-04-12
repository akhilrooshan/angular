import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.css']
})
export class LeavereqComponent implements OnInit {
  name=localStorage.getItem('name')

  constructor(private router :Router) { }

  ngOnInit(): void {
    const localData=localStorage.getItem('leaveReq');
    if(localData!=null)
    {
      this.leave=JSON.parse(localData);
     
    }




    
  }


  leave:any[]=[]


  onEdit(data:any)
  {
    
    localStorage.setItem("edit",JSON.stringify(data))
    this.router.navigate(['/home/leaveReq/confirmApprove'])
  
  }
 
  onDel(id:any)
  {

    localStorage.setItem("edit",JSON.stringify(id))
    this.router.navigate(['/deleteLR'])

  }



}


