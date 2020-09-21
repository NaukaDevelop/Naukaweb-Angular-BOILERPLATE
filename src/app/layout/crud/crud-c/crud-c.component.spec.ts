import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCComponent } from './crud-c.component';

describe('CrudCComponent', () => {
  let component: CrudCComponent;
  let fixture: ComponentFixture<CrudCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
