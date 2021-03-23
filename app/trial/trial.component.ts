import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReviewService } from '../sharedService/review.service';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  
  public searchText: string;
  SortbyParam: string = '';
  SortDirection: string = "asc";
  professionList = [{ id: 1, name: "Student" }, { id: 2, name: "Intern" }, { id: 3, name: "Developer" }];
  contactForm = new FormGroup({
    personalDetails: new FormGroup({
          firstname: new FormControl(),
          lastname: new FormControl(),
          email: new FormControl(),
          profession: new FormControl(),
    }),
    ratings: new FormControl(),
    feedback: new FormControl(),

  })
    reviews =[];
    empErrorMsg = "";

    constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
      this.reviewService.getReviews().subscribe(
        success => this.reviews = success,
        error => this.empErrorMsg = error
      )
    }
  onSortDirection() {
      if (this.SortDirection === 'desc') {
        this.SortDirection = 'asc';
      } else {
        this.SortDirection = 'desc';
      }
    }
   
  onSubmit() {
    console.log(this.contactForm.value);
  }



}
