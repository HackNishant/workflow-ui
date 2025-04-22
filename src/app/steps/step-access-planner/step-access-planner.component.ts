import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-access-planner',
  imports: [],
  templateUrl: './step-access-planner.component.html',
  styleUrl: './step-access-planner.component.css'
})
export class StepAccessPlannerComponent {
  @Output() nextStep = new EventEmitter<void>();

  next() {
    this.nextStep.emit();
  }
}
