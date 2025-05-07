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
  formData: any = {};

  register(form: any) {
    if (form.valid) {
      console.log("Form Submitted", this.formData);
      alert(JSON.stringify(this.formData, null, 2));
    }
  }
}
