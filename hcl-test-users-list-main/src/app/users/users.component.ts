import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FilterOption } from './filter-option.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  options: FilterOption[] = [
    {
      value: 'name',
      text: 'Name'
    },
    {
      value: 'username',
      text: 'User Name'
    },
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'phone',
      text: 'Phone'
    },
    {
      value: 'website',
      text: 'Website'
    }
  ];
  usersList:any[]=[];
  columnFilterby='name';
  selctdSerchval=''
  constructor(private userServce:UsersService) { }

  ngOnInit(): void {
this.getuserdata();
  }

  getuserdata(){
    this.userServce.getuserslist().subscribe(res=>{
      this.usersList=[];
      this.usersList.push(res);
      console.log(this.usersList)
    })
  }

  columnFilter(e){
    this.getuserdata();
this.selctdSerchval='';
     this.columnFilterby = e.options[e.selectedIndex].value;

  }
  filterTable(e){
    if(e.value != ''){
      this.selctdSerchval=e.value;
      this.usersList[0]=this.usersList[0].filter(item=>((item[this.columnFilterby]).toLowerCase()).indexOf((this.selctdSerchval).toLowerCase()) != -1)

    }else{
      this.getuserdata()
  }
}
}
