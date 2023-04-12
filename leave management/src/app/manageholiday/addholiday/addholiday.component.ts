import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
@Component({
  selector: 'app-addholiday',
  templateUrl: './addholiday.component.html',
  styleUrls: ['./addholiday.component.css']
})
export class AddholidayComponent implements OnInit {
  //stores todays date
  today: any = new Date();
  //stores tommorows date
  tommorow: any = new Date(this.today.setDate(this.today.getDate() + 1));
  //array for storing the data needs to be edited
  edit: any = []
  //array for storing holiday details from localstorage
  holiday: any[] = [];
  /*@param :services:instance of services
  @param:router:instance of  Router
  */
  constructor(public router: Router, private services: ServicesService) {
    const localEdit = localStorage.getItem('edit');
    if (localEdit != null) {
      this.edit = JSON.parse(localEdit);
      console.log(this.edit)
    }
  }
  ngOnInit(): void {
    const localHolidayData = localStorage.getItem('holidayList');
    if (localHolidayData != null) {
      this.holiday = JSON.parse(localHolidayData);
    }
  }
  /*initializing form controls and validation*/
  reason: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  date: FormControl = new FormControl('', [Validators.required]);
  id: FormControl = new FormControl(0, [Validators.required]);
  HolidayForm = new FormGroup(
    {
      reason: this.reason,
      date: this.date,
      id: this.id
    }
  )
  /*
@description:save the newly created holiday details in the local storage
  */
  saveHolidayData() {
    if (this.HolidayForm.valid) {
      //traverse the array to get the same id.
      this.HolidayForm.value.id = this.holiday.length + 1;
      this.holiday.push(this.HolidayForm.value)
      this.services.onCloseModel();
      localStorage.setItem('holidayList', JSON.stringify(this.holiday))
      this.router.navigate(['home/holiday'])
    } else {
      //to make the validation warning texts appear
      this.HolidayForm.markAllAsTouched();
    }
  }
  /*
@description:update the selected holiday details in the local storage
 */
  onHolidayUpdate() {
    const record = this.holiday.find(x => x.id == this.edit.id);
    record.date = this.edit.date;
    record.reason = this.edit.reason;
    if (this.HolidayForm.valid) {
      localStorage.setItem('holidayList', JSON.stringify(this.holiday))
      this.router.navigate(['home/holiday'])
    } else {
      this.HolidayForm.markAllAsTouched();
    }
  }
  /*
@description:close the holiday create/edit page 
*/
  holidayClose() {
    this.services.onCloseModel()
    this.router.navigate(['home/holiday'])
  }
}
