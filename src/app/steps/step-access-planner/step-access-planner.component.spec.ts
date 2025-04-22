import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAccessPlannerComponent } from './step-access-planner.component';

describe('StepAccessPlannerComponent', () => {
  let component: StepAccessPlannerComponent;
  let fixture: ComponentFixture<StepAccessPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAccessPlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAccessPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
