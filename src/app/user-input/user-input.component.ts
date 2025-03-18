import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-results/investment.service';

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

    private investmentService: InvestmentService = inject(InvestmentService );

    onCalculate(){
      this.investmentService.annualInvestment = this.annualInvestment;
      this.investmentService.initialInvestment = this.initialInvestment;
      this.investmentService.expectedReturn = this.expectedReturn;
      this.investmentService.duration = this.duration;

      this.investmentService.calculateInvestmentResults();

      this.investmentService.calculate = true;
    }
}
