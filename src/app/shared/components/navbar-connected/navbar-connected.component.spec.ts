import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConnectedComponent } from './navbar-connected.component';

describe('NavbarConnectedComponent', () => {
  let component: NavbarConnectedComponent;
  let fixture: ComponentFixture<NavbarConnectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarConnectedComponent]
    });
    fixture = TestBed.createComponent(NavbarConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
