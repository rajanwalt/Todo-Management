import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoCardsComponent } from './todo-cards/todo-cards.component';
import {TodoService} from './service/todo.service';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const route: Routes = [
  {
    path : 'user-cards',
    component : TodoCardsComponent

  },
  {
    path : 'todo-lists/:id',
    component : TodoListComponent

  },
  {
    path : '',
    redirectTo : '/user-cards',
    pathMatch : 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoCardsComponent,
    TodoTableComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
