import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "Minhas tarefas";

  constructor() {
    this.todos.push(new Todo(1,'jogar video game', false));
    this.todos.push(new Todo(2,'passear com o Thiago', true));
    this.todos.push(new Todo(3,'estudar programação', true));
  }

  remove(todo: Todo)
  {
    const index = this.todos.indexOf(todo); //captura o index do todo
    if(index !== -1)
    {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUnDone(todo: Todo){
    todo.done = false;
  }

}
