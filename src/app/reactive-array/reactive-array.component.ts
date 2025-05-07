import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-array',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './reactive-array.component.html',
  styleUrls: ['./reactive-array.component.css']
})
export class ReactiveArrayComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: '',
      address: this.fb.array([
        this.fb.group({
          street: '',
          city: ''
        })
      ])
    });
  }

  getControls() {
    return (this.contactForm.get('address') as FormArray).controls;
  }

  addAddressGroup() {
    const add = this.contactForm.get('address') as FormArray;
    add.push(
      this.fb.group({
        street: '',
        city: ''
      })
    );
  }

  deleteAddressGroup(index: number) {
    const add = this.contactForm.get('address') as FormArray;
    add.removeAt(index);
  }
}
