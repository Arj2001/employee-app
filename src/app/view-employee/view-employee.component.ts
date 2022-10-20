import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putEmployeeData()
   }

  employeeData :any = [  ]

  putEmployeeData = ()=>{
    this.myApi.getEmployeeData().subscribe(
      (resp)=>{
        this.employeeData = resp;
      }
    )
  }

  deleteEmployeeData = (id:any)=>{
    let data = {
      "id":id
    }
    this.myApi.deleteEmployeeData(data).subscribe(
      (resp)=>{

      }
    )
    alert("Deleted")
    this.putEmployeeData()
  }

  ngOnInit(): void {
  }

}
