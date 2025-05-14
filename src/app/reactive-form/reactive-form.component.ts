import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,12}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
    }, {
      validators: [this.confirmEqualValidator('password', 'confirmPassword')]
    });
  }

 
  confirmEqualValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);

      if (control && matchingControl && control.value !== matchingControl.value) {
        matchingControl.setErrors({ notEqual: true });
        return { notEqual: true };
      } else {
        return null;
      }
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log("Form Submitted", this.registrationForm.value);
      alert(JSON.stringify(this.registrationForm.value, null, 2));
    }
  }
}
