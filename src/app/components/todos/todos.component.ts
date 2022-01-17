import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;

  inputTodo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first',
        completed: false
      },
      {
        content: 'second',
        completed: true
      }
    ]
  }

  toggleDone(id:number) {
    this.todos?.map((todo, index) => {
      if(index == id) todo.completed = !todo.completed;
      
      return todo
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos?.filter((todo, index) => index != id);
  }

  addTodo() {
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}
