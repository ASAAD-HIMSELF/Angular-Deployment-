import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesbehaviorComponent } from './updatesbehavior.component';

describe('UpdatesbehaviorComponent', () => {
  let component: UpdatesbehaviorComponent;
  let fixture: ComponentFixture<UpdatesbehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesbehaviorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatesbehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
