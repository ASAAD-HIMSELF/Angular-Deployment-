import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDisplayComponent } from './navbar-display.component';

describe('NavbarDisplayComponent', () => {
  let component: NavbarDisplayComponent;
  let fixture: ComponentFixture<NavbarDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
