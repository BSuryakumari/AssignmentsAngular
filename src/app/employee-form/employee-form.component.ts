import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  imports: [],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {search="";
  users=[
    {name:'javascript',role:'Admin'},
    {name:'Angular', role:'user'},
    {name:'NodeJs',role:'Guest'}
  ]

}
