import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationToolbarListComponent } from './navigation-toolbar-list.component';

describe('NavigationToolbarListComponent', () => {
  let component: NavigationToolbarListComponent;
  let fixture: ComponentFixture<NavigationToolbarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationToolbarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationToolbarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
