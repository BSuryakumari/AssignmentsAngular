import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = [
    {
      id:2,
      firstName: 'John',
      lastName: 'Smith',
      salary:10000,
      dob: new Date('1983-11-02'),
      email:'john@abc.com'
    },
    {
      id:3,
      firstName:'Jason',
      lastName: 'Smith',
      salary:12000,
      dob:new Date('1980-08-12'),
      email:'jason@abc.com'
    },
    {
      id:4,
      firstName:'Surya',
      lastName:'Kumari',
      salary:30000,
      dob:new Date('1992-07-13'),
      email: 'surya@abc.com'
    },
    {
      id:5,
      firstName:'Prabhakar',
      lastName:'Reddy',
      salary:45000,
      dob:new Date('1985-07-08'),
      email: 'prabha@abc.com'
    },
    {
      id:6,
      firstName:'Naga',
      lastName:'Mani',
      salary:35000,
      dob:new Date('1982-11-31'),
      email:'mani@abc.com'
    }

  ];
}
