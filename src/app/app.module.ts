import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveArrayComponent } from './reactive-array/reactive-array.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TemplateFormComponent,
    ReactiveFormComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTableComponent,
    EmployeeFormComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    RouterModule,
    ProductDetailsComponent,
    PageNotFoundComponent,
    ReactiveArrayComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
