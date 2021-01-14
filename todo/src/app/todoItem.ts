/**
 * The todoItem data model.
 */
export class TodoItem {

    /**
     * The task name.
     */
    task : string;
    /**
     * Indicates if the taks is completed.
     */
    complete: boolean;

    /**
     * Create a new instance.
     *
     * @param task The task name.
     * @param complete Indicates if the task is completed.
     */
    constructor(task: string, complete: boolean = false) {
        this.task = task;
        this.complete = complete;
    }
}