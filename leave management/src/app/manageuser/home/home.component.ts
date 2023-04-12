import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../service/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 //confrim delete variable
 usersArray=this.service.usersArray
 user=this.service.user
  constructor(private service:ServicesService,private router:Router) { 
  }
  ngOnInit(): void {
    const localData=localStorage.getItem('userList');
    if(localData!=null)
    {
      this.user=JSON.parse(localData);
    }
    const localUser=localStorage.getItem('edit');
    if(localUser!=null)
    {
      localStorage.removeItem('edit')
    }
  }
createUser()
{
  this.router.navigate(['home/createUser'])
}
onEdit(item:any)
{
  localStorage.setItem("edit",JSON.stringify(item))
  this.router.navigate(['home/editUser'])
}
onDel(id:any){
 localStorage.setItem("edit",JSON.stringify(id))
    this.router.navigate(['/deleteUser'])
  }
}
