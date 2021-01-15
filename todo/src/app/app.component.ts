import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * The TodoList example to show.
   */
  private list = new TodoList(
    "Bob", 
    [
      new TodoItem('Go for run', true),
      new TodoItem('Get flowers'),
      new TodoItem('Collect tickets')
    ]
  );

  /**
   * Getter to the username.
   */
  public get username() : string {
    return this.list.user;
  }

  /**
   * Getter to the complete items count.
   */
  public get itemCount() : number {
    return this.list.items.filter(item => !item.complete).length;
  }  

  /**
   * Method to get items.
   */
  public get items() : readonly TodoItem[] {
    return this.list.items;
  }
}