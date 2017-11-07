import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoListModel} from './../data-model';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoStatus : string ='';
  todo : string= '';
  @Output() todoData: EventEmitter<{"todo" : string,status : boolean}> =new EventEmitter<{"todo" : string,status : boolean}>();

  
  constructor() { }

  ngOnInit() {
  }

  addTodoToList()  {
    this.todoData.emit({
      todo : this.todo,
      status : this.todoStatus === "Completed" ? true : false
    });
    
    /* --- Reset --- */
    this.todo='';
    this.todoStatus='';
    }
  checkValid()  {
    if(this.todo.length>0 && this.todoStatus.length>0)  {
      return true;
    }
    return false;
  }

}
