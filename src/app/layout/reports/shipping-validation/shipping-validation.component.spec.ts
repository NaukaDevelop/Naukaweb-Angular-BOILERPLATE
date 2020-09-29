import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingValidationComponent } from './shipping-validation.component';

describe('ShippingValidationComponent', () => {
  let component: ShippingValidationComponent;
  let fixture: ComponentFixture<ShippingValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
