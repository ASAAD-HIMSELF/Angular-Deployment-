import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSignupComponent } from './navbar-signup.component';

describe('NavbarSignupComponent', () => {
  let component: NavbarSignupComponent;
  let fixture: ComponentFixture<NavbarSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
