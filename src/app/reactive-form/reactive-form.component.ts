import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder,Validators,ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],  
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log("Form Submitted", this.registrationForm.value);
      alert(JSON.stringify(this.registrationForm.value, null, 2));
    }
  }

}