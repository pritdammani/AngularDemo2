import { Component, OnInit } from '@angular/core';
import { FrontService } from '../sharedService/front.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  public searchText: string;
  SortbyParam: string = '';
  SortDirection: string = "asc";
  coursesFront = [];
  empErrorMsg = "";

  constructor(private frontService: FrontService) { }

  ngOnInit(): void {
    this.frontService.getReviews().subscribe(
      success => this.coursesFront = success,
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
