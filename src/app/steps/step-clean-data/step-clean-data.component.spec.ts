import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCleanDataComponent } from './step-clean-data.component';

describe('StepCleanDataComponent', () => {
  let component: StepCleanDataComponent;
  let fixture: ComponentFixture<StepCleanDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCleanDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCleanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
