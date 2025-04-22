import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepAccessPlannerComponent } from './steps/step-access-planner/step-access-planner.component';
import { StepConnectPowerbiComponent } from './steps/step-connect-powerbi/step-connect-powerbi.component';
import { StepAutomateSyncComponent } from './steps/step-automate-sync/step-automate-sync.component';
import { StepBuildDashboardComponent } from './steps/step-build-dashboard/step-build-dashboard.component';
import { StepCleanDataComponent } from './steps/step-clean-data/step-clean-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,
    StepAccessPlannerComponent,
    StepCleanDataComponent,
    StepConnectPowerbiComponent,
    StepBuildDashboardComponent,
    StepAutomateSyncComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'workflow-ui';
  currentStep = 0;

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }
  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onStepSelected(step: number) {
    this.currentStep = step;
  }

  getStatus(index: number): 'done' | 'open' {
    return this.currentStep > index ? 'done' : 'open';
  }
  
}
