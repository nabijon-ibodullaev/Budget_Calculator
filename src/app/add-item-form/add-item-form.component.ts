import {Component, EventEmitter, Input,Output, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BudgetModel} from "../budget.model";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetModel = new BudgetModel('', null )
  @Output() formSubmit: EventEmitter<BudgetModel> = new EventEmitter<BudgetModel>();
  constructor() { }

  isNew: boolean = true;
  ngOnInit() {

    if(this.item) {
       this.isNew = false
  } else  {
    this.isNew = true;
    this.item = new BudgetModel('', null)
  }
  }

  onSubmit(itemForm: NgForm) {
    this.formSubmit.emit(itemForm.value)
    itemForm.reset();
  }
}
