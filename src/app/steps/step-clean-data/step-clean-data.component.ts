import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-clean-data',
  imports: [],
  templateUrl: './step-clean-data.component.html',
  styleUrl: './step-clean-data.component.css'
})
export class StepCleanDataComponent {
  @Output() nextStep = new EventEmitter<void>();

  next() {
    this.nextStep.emit();
  }
  @Output() previousStep = new EventEmitter<void>();

  previous(){
    this.previousStep.emit();
  }
}
