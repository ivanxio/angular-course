/*
 * Dependency on the TodoItem.
 */
import { TodoItem } from "./todoItem";

/**
 * The TodoList data model.
 */
export class TodoList {

    /**
     * Creates a new instance.
     *
     * @param user The user.
     * @param todoItems The items list. 
     */
    constructor(public user: string, private todoItems: TodoItem[] = []) {
    }

    /**
     * Getter to the items list.
     */
    public get items() : readonly TodoItem[] {
        return this.todoItems;
    }

    /**
     * Method to add items to the list.
     */
    public addItem(task: string) {
        this.todoItems.push(new TodoItem(task));
    }
}