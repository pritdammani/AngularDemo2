import { Component, OnInit } from '@angular/core';
import { BackService } from '../sharedService/back.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  public searchText: string;
  SortbyParam: string = '';
  SortDirection: string = "asc";
  coursesBack = [];
  empErrorMsg = "";

  constructor(private backService: BackService) { }

  ngOnInit(): void {
    this.backService.getCourses().subscribe(
      success => this.coursesBack = success,
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
