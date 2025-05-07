import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ReactiveArrayComponent } from './reactive-array/reactive-array.component';


@Component({
  selector: 'app-root',

  imports: [EmployeeListComponent,
    RouterModule,
    EmployeeComponent,
    EmployeeTableComponent,
    EmployeeFormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveArrayComponent,
    FormsModule ,
    RouterOutlet,
    RouterLink

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
  constructor() {}
}

