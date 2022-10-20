import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getEmployeeData=()=>{
    return this.http.get("http://localhost:8080/viewEmployee")
  }

  postEmployeeData=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }

  deleteEmployeeData=(id:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",id)
  }
  searchEmployeeData=(name:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",name)
  }

}
