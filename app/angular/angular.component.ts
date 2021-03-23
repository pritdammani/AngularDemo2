import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../sharedService/user.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {

  loginS: boolean;
  
  login = [{ email: "prit@gmail.com", password: "Prit@123" },
    { email: "amey@gmail.com", password: "Amey@123" },
  { email: "sandeep@gmail.com", password: "Sandeep@123" }];

  constructor(private formBuilder: FormBuilder) { }

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-z,A-Z\\s]{5,15}$')]],

    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+')]],
    password: ['', [Validators.required]],

  })
  errormsg = '';

  submitData(data) {
    console.log(data.email, data.password)

    for (let user of this.login) {
      if ((data.email == user.email) && (data.password == user.password)) {
        this.loginS = true;
        window.location.href = '/home';
      }

        else {
        console.log("Invalid");
        this.errormsg = 'Invalid User';
        }
      }
    }
    }

