import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-build',
  templateUrl: './form-build.component.html',
  styleUrls: ['./form-build.component.css']
})
export class FormBuildComponent  {

  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
    address: this.formBuilder.group({
      street: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      city: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    })
  })
  
  myData = [];
  submitData() {
    console.log(this.userForm.value)
    this.myData.push(this.userForm.value)
  }

}
