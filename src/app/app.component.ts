import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = "Minhas tarefas";

  constructor() {
    this.todos.push("cortar o cabelo");
    this.todos.push("passear com o cachorro");
    this.todos.push("correr");
  }

  alterar()
  {
    this.title = "Teste";
  }
}
