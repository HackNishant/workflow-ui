import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAutomateSyncComponent } from './step-automate-sync.component';

describe('StepAutomateSyncComponent', () => {
  let component: StepAutomateSyncComponent;
  let fixture: ComponentFixture<StepAutomateSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAutomateSyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAutomateSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
