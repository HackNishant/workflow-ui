import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-build-dashboard',
  imports: [],
  templateUrl: './step-build-dashboard.component.html',
  styleUrl: './step-build-dashboard.component.css'
})
export class StepBuildDashboardComponent {
  @Output() nextStep = new EventEmitter<void>();

  next() {
    this.nextStep.emit();
  }
  @Output() previousStep = new EventEmitter<void>();

  previous(){
    this.previousStep.emit();
  }
}


