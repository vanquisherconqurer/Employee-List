import { Component } from '@angular/core';

export interface employees {
  id: number;
  name: string;
  age: number;
}


const ELEMENT_DATA: employees[] = [
  {"id":1,"name":"Andrew","age":30},
  {"id":2,"name":"Brandon","age":25},
  {"id":3,"name":"Christina","age":26},
  {"id":4,"name":"Elena","age":28},
]

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})

export class EmployeeTableComponent {

  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = ELEMENT_DATA;

 

}
