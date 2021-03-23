import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdwjsonComponent } from './prodwjson.component';

describe('ProdwjsonComponent', () => {
  let component: ProdwjsonComponent;
  let fixture: ComponentFixture<ProdwjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdwjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdwjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
