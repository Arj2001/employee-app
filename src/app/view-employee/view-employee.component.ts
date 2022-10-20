import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor() { }

  employeeData :any = [
    {
      "name":"heelo",
        "empCode":"152",
          "desgin":"desg",
          "company":"nest",
        "email":"EMAIL.COM",
        "address":"addessf dsf",
        "dob":"25+05-20",
        "phone":"565233",
        "salary":"56222",
        "doj":"5-90-200",
    }
  ]

  ngOnInit(): void {
  }

}
