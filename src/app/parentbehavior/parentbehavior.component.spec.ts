import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbehaviorComponent } from './parentbehavior.component';

describe('ParentbehaviorComponent', () => {
  let component: ParentbehaviorComponent;
  let fixture: ComponentFixture<ParentbehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentbehaviorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentbehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
