"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemCollection = void 0;
const item_1 = require("./item");
class itemCollection {
    constructor(userName, items = []) {
        this.userName = userName;
        this.nextId = 1;
        this.items = [];
        this.itemMap = new Map();
        items.forEach((item) => this.itemMap.set(item.taskId, item));
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getToDoItems(false).length
        };
    }
    addToDo(task) {
        this.itemMap.set(this.nextId, new item_1.Item(this.nextId, task));
        this.nextId++;
    }
    getToDoItems(showComplete) {
        let completedItems = [];
        if (showComplete) {
            this.itemMap.forEach((item) => completedItems.push(item));
        }
        else {
            this.itemMap.forEach((item) => {
                if (item.done == showComplete) {
                    completedItems.push(item);
                }
            });
        }
        return completedItems;
    }
    removeCompletedItems() {
        this.itemMap.forEach((item) => {
            if (item.done == true) {
                this.itemMap.delete(item.taskId);
            }
        });
    }
    getTodoById(id) {
        const todoToFind = this.itemMap.get(id) || new item_1.Item(0, "Item not found!", false);
        return todoToFind;
    }
    taskDone(taskId) {
        const completedTodo = this.getTodoById(taskId);
        completedTodo.done = true;
    }
    printAll() {
        this.itemMap.forEach((item) => item.printTask());
    }
    markComplete(taskId, b) {
        const todoItem = this.getTodoById(taskId);
        if (todoItem) {
            todoItem.done = b;
        }
    }
}
exports.itemCollection = itemCollection;
//# sourceMappingURL=itemCollection.js.map