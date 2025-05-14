import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  formData: any = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false
  };

  register(form: any) {
    if (form.valid && this.formData.password === this.formData.confirmPassword) {
      console.log("Form Submitted", this.formData);
      alert("Registration successful!");
    } else {
      alert("Please fix the form errors before submitting.");
    }
  }
}