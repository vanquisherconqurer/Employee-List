import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import  { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    EmployeeTableComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
