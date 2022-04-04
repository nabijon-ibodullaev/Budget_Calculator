import {Component, Input, OnInit} from '@angular/core';
import {BudgetModel} from "../budget.model";

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.scss']
})
export class EditBudgetComponent implements OnInit {

  @Input() item!: BudgetModel;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(upItem: BudgetModel) {

  }
}
