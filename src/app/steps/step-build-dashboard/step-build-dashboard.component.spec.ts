import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBuildDashboardComponent } from './step-build-dashboard.component';

describe('StepBuildDashboardComponent', () => {
  let component: StepBuildDashboardComponent;
  let fixture: ComponentFixture<StepBuildDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepBuildDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepBuildDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
