export class TodoItem {

    task : string;
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