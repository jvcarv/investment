import { Injectable } from "@angular/core";
import { InvestmentModel } from "./investment.model";

@Injectable({providedIn: "root"})
export class InvestmentService{
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  allInvestments:Array<InvestmentModel> = [];

  calculate:boolean = false;

  constructor() {}

  calculateInvestmentResults() {
      let investmentValue = this.initialInvestment;

      for (let i = 0; i < this.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
        investmentValue += interestEarnedInYear + this.annualInvestment;
        const totalInterest =investmentValue - this.annualInvestment * year - this.initialInvestment;
        console.log("year"+ year,
          "interest"+ interestEarnedInYear,
          "valueEndOfYear"+ investmentValue,
          "annualInvestment"+ this.annualInvestment,
          "totalInterest"+ totalInterest,
          "totalAmountInvested"+ this.initialInvestment + this.annualInvestment * year,);
        this.allInvestments.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: this.annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
        });
      }
  }
}
