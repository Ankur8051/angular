import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  onSave($event){    
    console.log("Save button is clicked!", $event);    
  }  

  constructor() {}
    ngOnInit() {
  }

}
