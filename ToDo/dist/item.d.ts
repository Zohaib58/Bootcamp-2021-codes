export declare class Item {
    taskId: number;
    task: String;
    done: boolean;
    constructor(taskId: number, task: String, done?: boolean);
    printTask(): void;
}
