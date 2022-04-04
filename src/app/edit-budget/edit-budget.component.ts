import {Component, Inject, Input, OnInit} from '@angular/core';
import {BudgetModel} from "../budget.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.scss']
})
export class EditBudgetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditBudgetComponent>,
              @Inject(MAT_DIALOG_DATA) public item: BudgetModel
              ) { }

  ngOnInit(): void {
  }

  onSubmitted(upItem: BudgetModel) {
    this.dialogRef.close(upItem)
  }
}
