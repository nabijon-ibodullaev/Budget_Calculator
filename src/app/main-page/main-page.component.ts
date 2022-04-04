import { Component, OnInit } from '@angular/core';
import {BudgetModel} from "../budget.model";
import {UpdateItem} from "../budget-item-list/budget-item-list.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  BudgetItems: BudgetModel[] = new Array<BudgetModel>()
  totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: BudgetModel) {
    this.BudgetItems.push(newItem)
    this.totalBudget += newItem.amount
  }

  DeleteItem(ev: BudgetModel) {
    let index = this.BudgetItems.indexOf(ev)
    this.BudgetItems.splice(index, 1)
    this.totalBudget -= ev.amount

  }
  updateItem(upEvent: UpdateItem) {

    this.BudgetItems[this.BudgetItems.indexOf(upEvent.old)] = upEvent.new

    this.totalBudget -= upEvent.old.amount;
    this.totalBudget += upEvent.new.amount;

  }


}
