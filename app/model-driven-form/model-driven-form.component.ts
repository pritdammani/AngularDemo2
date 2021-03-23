import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent  {

  
  // userForm = new FormGroup({
  //   name:new FormControl('',[ Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //   email:new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+')]),
  //   address: new FormGroup({
  //   state:new FormControl('',[ Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(5)]),
  //   city:new FormControl('',[ Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(4)]),
  //   postalcode:new FormControl('',[ Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(6), Validators.maxLength(6) ])
  //   })
  // })
  //myData=[];
  //submitData() {
  //  //console.log(this.userForm.value)
  //  this.myData.push(this.userForm.value)
  //}

  ////submitData(data: any[]) {
  ////  console.log(this.submitData(data))
  ////  this.mydata.push(data);
  ////  console.log(this.mydata)
  ////}
  constructor() { }
  professionList = [{ id: 1, name: "Student" }, { id: 2, name: "Intern" }, { id: 3, name: "Developer" }];
  contactForm = new FormGroup({
    personalDetails: new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]+')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]+')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      profession: new FormControl()
    }),

    ratings: new FormControl(),
    feedback: new FormControl(),

  })
     myData=[];
  onSubmit() {
    console.log(this.contactForm.value);
    this.myData.push(this.contactForm.value);
  }


  
}
