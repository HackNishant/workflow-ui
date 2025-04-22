import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepConnectPowerbiComponent } from './step-connect-powerbi.component';

describe('StepConnectPowerbiComponent', () => {
  let component: StepConnectPowerbiComponent;
  let fixture: ComponentFixture<StepConnectPowerbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepConnectPowerbiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepConnectPowerbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
