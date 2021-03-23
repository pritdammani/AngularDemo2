import { Component, OnInit } from '@angular/core';
import { ProductwjsonService } from '../sharedService/productwjson.service';

@Component({
  selector: 'app-prodwjson',
  templateUrl: './prodwjson.component.html',
  styleUrls: ['./prodwjson.component.css']
})
export class ProdwjsonComponent implements OnInit {

  public searchText: string;

  products = [];
  empErrorMsg;
  SortbyParam: string = '';
  SortDirection: string = "asc";

  constructor(private productService: ProductwjsonService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      success => this.products = success,
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
