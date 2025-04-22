import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-connect-powerbi',
  imports: [],
  templateUrl: './step-connect-powerbi.component.html',
  styleUrl: './step-connect-powerbi.component.css'
})
export class StepConnectPowerbiComponent {
  @Output() nextStep = new EventEmitter<void>();

  next() {
    this.nextStep.emit();
  }
  @Output() previousStep = new EventEmitter<void>();

  previous(){
    this.previousStep.emit();
  }
}
