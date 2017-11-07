import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { TodoService } from './../service/todo.service';
import {TodoListModel} from './../data-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private todoService : TodoService) { }

  id : number ;
  todoList : TodoListModel[] =[];
  activeTodo : TodoListModel = null;
  activeIndex: number;
  showTodoForm : boolean = false;

  textCrossStyle = {
    'text-decoration': 'line-through'
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>  {
        this.id = params['id'];

        this.todoService.getTodos(params['id']).then(
          value => this.todoList=value
        )
        console.log(this.id );
      }
    )
  }

  getActiveTodo(todo : TodoListModel)  {
    // console.log(todo);  
    this.activeTodo = todo;
  }

  deleteTodo()  {
    if(this.activeTodo)  {
      this.todoService.deleteTodo(this.activeTodo.id).then(
        value => {
          //console.log(this.activeIndex);
          this.todoList.splice(this.activeIndex, 1);
        }
      )
    }
  }

 changeStatus()  {
    if(this.activeTodo)  {
      this.activeTodo.completed=!this.activeTodo.completed;
    }
  }

  getNewTodo(todoData)  {
    let lastTodo = this.todoList.length>0 ? this.todoList[this.todoList.length -1] : null;
    this.todoList.push({
      userId : this.id,
      id : lastTodo? (lastTodo.id + 1) : 1,
      title : todoData.todo,
      completed : todoData.status
    });
    
  }

}
