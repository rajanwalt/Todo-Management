import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges   } from '@angular/core';
import {TodoListModel} from './../data-model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit,OnChanges {

  @Input() todo : TodoListModel;
  @Input() todoIndex : number;
  @Input() currentActiveTodo : TodoListModel;
  @Output() activeTodo: EventEmitter<TodoListModel> =new EventEmitter<TodoListModel>();


  active : boolean =false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for(let propName in changes)  {
      if(propName === "currentActiveTodo" && changes[propName].previousValue)   {
        if(changes[propName].previousValue.currentActiveTodo !== changes[propName].currentValue.currentActiveTodo)  {
          this.currentActiveTodo=  changes[propName].currentValue.currentActiveTodo;
        }  
      }
      
      
    }    
  }

  getSelectedTodo()  {
    if(!this.active)  {
      this.activeTodo.emit(this.todo);
    }
    
  }

}
