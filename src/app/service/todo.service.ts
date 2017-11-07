import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {TodoCradModel} from './../data-model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  constructor(private http : HttpClient) { }

  getCards()  {
    return this.http.get<TodoCradModel[]>('https://jsonplaceholder.typicode.com/users')
    .toPromise()
    .then( response => response)
    .catch(this.errorHandler)    
  }

  getTodos(id)  {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .toPromise()
    .then(
      response => response
    )
    .catch(this.errorHandler)  
  }

  deleteTodo(id)  {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .toPromise()
    .then(
      response => response
    )
    .catch(this.errorHandler)  
  }

  private  errorHandler(error : any) : Promise<any>  {
    return Promise.reject(error.message || error);
  }

}
