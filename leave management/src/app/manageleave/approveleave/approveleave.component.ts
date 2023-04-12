import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
@Component({
  selector: 'app-approveleave',
  templateUrl: './approveleave.component.html',
  styleUrls: ['./approveleave.component.css']
})
export class ApproveleaveComponent implements OnInit {
  //array for storing the data needs to be edited
  edit: any = []
  //array for storing the already confirmed leaves
  confirm: any = []
  //array for storing the pending leaves
  leave: any[] = []
  constructor(public router: Router, private service: ServicesService) {
    const localEdit = localStorage.getItem('edit');
    if (localEdit != null) {
      this.edit = JSON.parse(localEdit);
      console.log(this.edit)
    }
    const localapprove = localStorage.getItem('approved');
    if (localapprove != null) {
      this.confirm = JSON.parse(localapprove);
    }
  }
  ngOnInit(): void {
    const localLeaveData = localStorage.getItem('leaveReq');
    if (localLeaveData != null) {
      this.leave = JSON.parse(localLeaveData);
    }
  }
  /*
@description:calls when approved is pressed and it stores
  */
  onApproveLeave() {
    const record = this.leave.find(x => x.leaveId == this.edit.leaveId);
    record.leavedate = this.edit.leavedate;
    record.leavereason = this.edit.leavereason;
    record.leaveId = this.edit.leaveId;
    this.confirm.push(record)
    localStorage.setItem('approved', JSON.stringify(this.confirm))
    this.onDelete(this.edit.leaveId)
    this.router.navigate(['home/leaveReq'])
  }
  onDelete(id: any) {
    for (let i = 0; i < this.leave.length; i++) {
      if (this.leave[i].leaveId == id) {
        this.leave.splice(i, 1);
      }
    }
    localStorage.setItem('leaveReq', JSON.stringify(this.leave))
  }
  closeUpdate() {
    this.service.onCloseModel()
    this.router.navigate(['home/leaveReq'])
  }
}
