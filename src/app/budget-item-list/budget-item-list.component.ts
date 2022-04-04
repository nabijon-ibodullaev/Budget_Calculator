import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetModel} from "../budget.model";
import {MatDialog} from "@angular/material/dialog";
import {EditBudgetComponent} from "../edit-budget/edit-budget.component";

export interface  UpdateItem{
  old: BudgetModel;
  new: BudgetModel;
}

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})


export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems!: BudgetModel[]
  @Output() delete: EventEmitter<BudgetModel> = new EventEmitter<BudgetModel>();
  @Output() update: EventEmitter<UpdateItem> = new EventEmitter<UpdateItem>()
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  remove(event: BudgetModel) {
    this.delete.emit(event)
  }
/* Dialog */
  onCardC(item: BudgetModel) {
    const dialog = this.dialog.open(EditBudgetComponent, {
      width: '580px',
      data: item
    })

    dialog.afterClosed().subscribe((result)=>{
      if(result) {
        /* this.budgetItems[this.budgetItems.indexOf(item)] = result*/
      this.update.emit({
        old: item,
        new: result
      })
      }
    })
  }
}
