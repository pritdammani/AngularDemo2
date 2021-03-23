import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../sharedService/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public searchText: string;
  SortbyParam: string = '';
  SortDirection: string = "asc";
  reviews = [];
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



}
