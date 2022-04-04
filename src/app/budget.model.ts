export class BudgetModel {
  description!: string;
  amount!: number;

  constructor(description: string, amount: any) {
    this.description = description;
    this.amount = amount;
  }
}
