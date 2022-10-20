import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

const addRoutes:Routes = [
  {
    path:"",component:ViewEmployeeComponent
  },
  {
    path:"add-employee",component:AddEmployeeComponent
  },
  {
    path:"search-employee",component:SearchEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
