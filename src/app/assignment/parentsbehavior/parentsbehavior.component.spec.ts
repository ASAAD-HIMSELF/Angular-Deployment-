import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsbehaviorComponent } from './parentsbehavior.component';

describe('ParentsbehaviorComponent', () => {
  let component: ParentsbehaviorComponent;
  let fixture: ComponentFixture<ParentsbehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentsbehaviorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentsbehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
