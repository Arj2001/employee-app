import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  empCode = ""
  desgin = ""
  company = ""
  email = ""
  address = ""
  dob = ""
  phone = ""
  salary = ""
  doj = ""

  readValues=()=>{
    let data =
      {
        "name":this.name,
        "empCode":this.empCode,
        "desgin":this.desgin,
        "company":this.company,
        "email":this.email,
        "address":this.address,
        "dob":this.dob,
        "phone":this.phone,
        "salary":this.salary,
        "doj":this.doj,
      }
    console.log(data)
    this.myApi.postEmployeeData(data).subscribe(
      (res)=>{

      }
    )
    alert("added")
  }

  ngOnInit(): void {
  }

}
