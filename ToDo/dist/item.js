"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(taskId, task, done = false) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }
    printTask() {
        console.log(`id = ${this.taskId}, Task: ${this.task}, Completed: ${this.done}`);
    }
}
exports.Item = Item;
