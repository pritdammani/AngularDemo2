import { TestBed } from '@angular/core/testing';

import { ProductwjsonService } from './productwjson.service';

describe('ProductwjsonService', () => {
  let service: ProductwjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductwjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
