import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBComponent } from './crud-b.component';

describe('CrudBComponent', () => {
  let component: CrudBComponent;
  let fixture: ComponentFixture<CrudBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
