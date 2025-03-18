import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    input: number = 0;
    initialInvestment: number = 0;
    annualInvestment: number = 0;
    expectedReturn: number = 0;
    duration: number = 0;
    isCalculated:boolean = false;
    @Output() calculate = new EventEmitter<void>();

    onCalculate(){
      console.log("hehe");
      this.calculate.emit();
    }
}
