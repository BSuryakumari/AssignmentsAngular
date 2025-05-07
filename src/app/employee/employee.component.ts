import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './employee'; 

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  showEdit = false;

  employee: Employee = {
    empId: 2,
    firstName: 'John',
    lastName: 'Smith',
    salary: 10000,
    dob: '1983-11-02',
    email: 'john@abc.com'
  };

  EditEmp() {
    this.showEdit = true;
  }

  UpdateEmp() {
    this.showEdit = false;
    console.log('Updated Employee:', this.employee);
  }
}
