import { Item } from "./item";
declare type ItemCounts = {
    total: number;
    incomplete: number;
};
export declare class itemCollection {
    userName: String;
    private nextId;
    items: Item[];
    private itemMap;
    constructor(userName: String, items?: Item[]);
    getItemCounts(): ItemCounts;
    addToDo(task: String): void;
    getToDoItems(showComplete: boolean): Item[];
    removeCompletedItems(): void;
    getTodoById(id: number): Item;
    taskDone(taskId: any): void;
    printAll(): void;
    markComplete(taskId: number, b: boolean): void;
}
export {};
