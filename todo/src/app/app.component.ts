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

  public showComplete: boolean = false;

  /**
   * Getter to the username.
   */
  public get username() : string {
    return this.list.user;
  }

  /**
   * Getter to the total items count.
   */
  public get itemCount() : number {
    return this.items.length;
  }  

  /**
   * Method to get the complete and incomplete items.
   */
  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  /**
   * Method to add a new task.
   */
  public addItem(newItem) {
    if(newItem != "") {
      this.list.addItem(newItem);
    }
  }
}