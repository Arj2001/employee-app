import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor() { }

  empCode = ""

  employeeData: any = [
    {
      "name": "heelo",
      "empCode": "152",
      "desgin": "desg",
      "company": "nest",
      "email": "EMAIL.COM",
      "address": "addessf dsf",
      "dob": "25+05-20",
      "phone": "565233",
      "salary": "56222",
      "doj": "5-90-200",
    }
  ]

  readValues = () => {
    let data = {
      "empCode": this.empCode,
      "name": this.empCode
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
