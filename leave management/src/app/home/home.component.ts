import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const localData=localStorage.getItem('userList');
    if(localData!=null)
    {
      this.user=JSON.parse(localData);
    }
  }
  
  user:any[]=[];
  usersArray:any={
    userId:0,
  username:'',
    Email:'',
    phone:'',
  }

  onCreateUser() {
    
    const notNull = document.getElementById('userModal ' );
    if (notNull != null) {
    notNull.style.display = ' block' ;
    }
    }



    onCloseModel() {
    const notNull = document.getElementById('userModal ' );
    if (notNull != null) {
    notNull.style.display = ' none' ;
    }
    this.usersArray={
      userId:0,
      username:'',
    Email:'',
    phone:'',
     }
     window.location.reload()
    }
  saveData(data:any)
  {

    this.usersArray.userId=this.user.length+1;
     this.user.push(this.usersArray)
     this.onCloseModel();
     localStorage.setItem('userList',JSON.stringify(this.user))
     this.usersArray={
      userId:0,
      username:'',
    Email:'',
    phone:'',
     }
  }

  onEdit(data:any)
  {
    
    this.onCreateUser();
    this.usersArray=data;
  }
  onUpdate()
  {
    const record=this.user.find(x=>x.userId==this.usersArray.userId);
    record.username=this.usersArray.username;
    record.Email=this.usersArray.Email;
    record.phone=this.usersArray.phone;
    localStorage.setItem('userList',JSON.stringify(this.user))

    this.onCloseModel;
    window.location.reload()

  }

  onDelete(id:any)
  {
    for(let i=0;i<this.user.length;i++)
    {
      if(this.user[i].userId==id)
      {
        this.user.splice(i,1);
      }
    }
    localStorage.setItem('userList',JSON.stringify(this.user))

  }

}


