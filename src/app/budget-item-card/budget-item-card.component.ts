import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetModel} from "../budget.model";

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item!: BudgetModel;
  @Output() delete: EventEmitter<BudgetModel> = new EventEmitter<BudgetModel>()
  @Output() clickC: EventEmitter<BudgetModel> = new EventEmitter<BudgetModel>()
  constructor() {}

  ngOnInit(): void {}

  remove() {
    this.delete.emit()
  }

  CardClick() {
  this.clickC.emit()
  }
}
