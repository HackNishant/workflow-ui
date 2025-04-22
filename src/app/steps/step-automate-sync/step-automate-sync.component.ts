import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-automate-sync',
  imports: [],
  templateUrl: './step-automate-sync.component.html',
  styleUrl: './step-automate-sync.component.css'
})
export class StepAutomateSyncComponent {
  @Output() nextStep = new EventEmitter<void>();

  @Output() previousStep = new EventEmitter<void>();

  previous(){
    this.previousStep.emit();
  }

  next() {
    this.nextStep.emit();
  }
}
