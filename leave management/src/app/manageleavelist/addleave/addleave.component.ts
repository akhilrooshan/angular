import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {
  today: any = new Date();
  tommorow:any=new Date(this.today.setDate(this.today.getDate() + 1));
leaveId:FormControl= new FormControl(0,[Validators.required]);
leavedate:FormControl= new FormControl('',[Validators.required]);
leavereason:FormControl= new FormControl('',[Validators.required,Validators.minLength(3)]);
name:FormControl= new FormControl('');
leaveForm=new FormGroup({
  leaveId:this.leaveId,
  leavereason:this.leavereason,
  leavedate:this.leavedate,
  name:this.name
}
)
confirm:any=[]
edit:any=[]
leave:any=[]
  constructor(public router:Router,private service:ServicesService) { 
      const localEdit = localStorage.getItem('edit');
    if (localEdit != null) {
      this.edit = JSON.parse(localEdit);
      console.log(this.edit)
    }
  }
  ngOnInit(): void {
    const localLeaveData = localStorage.getItem('leaveReq');
    if (localLeaveData != null) {
      this.leave = JSON.parse(localLeaveData);
    }
  }
  saveLeaveData() {
    if(this.leaveForm.valid){
        this.leaveForm.value.leaveId = this.leave.length + 1;
        this.leaveForm.value.name = localStorage.getItem('name')
        this.leave.push(this.leaveForm.value)
        this.service.onCloseModel();
        localStorage.setItem('leaveReq', JSON.stringify(this.leave))
        this.router.navigate(['home/leaveList'])
     } else{
          this.leaveForm.markAllAsTouched();
        }
      }
      onLeaveUpdate() {
        const record = this.leave.find((x: { leaveId: any; }) => x.leaveId == this.edit.leaveId);
        record.leavedate = this.edit.leavedate;
        record.leavereason = this.edit.leavereason;
        if(this.leaveForm.valid){
        localStorage.setItem('leaveReq', JSON.stringify(this.leave))
          this.router.navigate(["home/leaveList"])
        }else{
          this.leaveForm.markAllAsTouched();
        }
      }
  leaveClose() {
    this.service.onCloseModel()
    this.router.navigate(['home/leaveList'])
  }
} 
