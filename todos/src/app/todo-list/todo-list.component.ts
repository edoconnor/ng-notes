import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: any;
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todoList = this.todosService.getTodos();
  }
}
