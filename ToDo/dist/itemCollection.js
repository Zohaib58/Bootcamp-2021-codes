"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemCollection = void 0;
const item_1 = require("./item");
class itemCollection {
    constructor(userName, items = []) {
        this.userName = userName;
        this.items = items;
        this.nextId = 1;
        this.itemMap = new Map();
        items.forEach((item) => this.itemMap.set(item.taskId, item));
    }
    addToDo(task) {
        this.itemMap.set(this.nextId, new item_1.Item(this.nextId, task));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    /*
    public taskDoneFIND(taskId: number)
    {
        // finding item through lambda function 'find' whose taskId is same as the parameter and marking it done
        this.items.find((Item) => Item.taskId == taskId).done = true
    }
    */
    taskDone(taskId) {
        // finding item through lambda function 'find' whose taskId is same as the parameter and marking it done
        this.getTodoById(taskId).done == true;
    }
    printAll() {
        this.items.forEach((item) => item.printTask());
    }
}
exports.itemCollection = itemCollection;
