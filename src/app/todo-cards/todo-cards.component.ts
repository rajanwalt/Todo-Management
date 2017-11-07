import { Component, OnInit } from '@angular/core';

import { TodoService } from './../service/todo.service';
import {TodoCradModel} from './../data-model';

@Component({
  selector: 'app-todo-cards',
  templateUrl: './todo-cards.component.html',
  styleUrls: ['./todo-cards.component.css']
})
export class TodoCardsComponent implements OnInit {

  userCards : TodoCradModel[] =[];

  userDataColumn : string[] = [];
  
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.getCardData();
      
  }
  getCardData()  {
    /* --- Get cards Data --- */
    this.todoService.getCards().then(
      data => {
        this.userCards=data;
        this.getColumnData(data);
      }
    );
  }
  
  
  
  getColumnData(data)  {
    if(data.length > 0)  {
      for(let title in data[0] )  {
        if(typeof(title) === 'object')  {

        }
        else  {
          this.userDataColumn.push(title);  
        }
        
      }
    }
    else {
      console.log("no data");
    }

  }
}
