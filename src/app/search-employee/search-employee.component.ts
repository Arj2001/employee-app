import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""

  employeeData: any = []

  readValues = () => {
    let data = {
      "name": this.name
    }
    this.myApi.searchEmployeeData(data).subscribe(
      (resp)=>{
        this.employeeData = resp;
      }
    )
    console.log(data)
  }

  ngOnInit(): void {
  }

}
