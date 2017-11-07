import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit,OnChanges {

  @Input('records') tableData : any;
 
  constructor() { 
  }

 ngOnInit() {
 }
 
 ngOnChanges() {
    console.log("test" + this.tableData);
 }



  

  
}
