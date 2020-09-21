import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAComponent } from './crud-a.component';

describe('CrudAComponent', () => {
  let component: CrudAComponent;
  let fixture: ComponentFixture<CrudAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
