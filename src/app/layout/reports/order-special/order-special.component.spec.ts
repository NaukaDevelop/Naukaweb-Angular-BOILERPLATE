import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSpecialComponent } from './order-special.component';

describe('OrderSpecialComponent', () => {
  let component: OrderSpecialComponent;
  let fixture: ComponentFixture<OrderSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
