import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebehaviorComponent } from './updatebehavior.component';

describe('UpdatebehaviorComponent', () => {
  let component: UpdatebehaviorComponent;
  let fixture: ComponentFixture<UpdatebehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatebehaviorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatebehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
