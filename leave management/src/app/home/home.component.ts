import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 cdel:any=[];

 
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
  this.router.navigate(['createUser'])
  
}

onEdit(item:any)
{
  
 
  localStorage.setItem("edit",JSON.stringify(item))
  this.router.navigate(['/editUser'])

}


  onDel(id:any){
    this.cdel[id]=true;

  }

  onCancel(id:any){
    this.cdel[id]=false;
  }
  onDelete(id:any)
  {
    console.log("From delete")
    for(let i=0;i<this.user.length;i++)
    {
      if(this.user[i].userId==id)
      {
        this.user.splice(i,1);
      }
    }
    localStorage.setItem('userList',JSON.stringify(this.user))
    this.cdel=false
    window.location.reload()
  }


  
 
}


