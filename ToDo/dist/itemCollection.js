"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemCollection = void 0;
const item_1 = require("./item");
class itemCollection {
    constructor(userName, items = []) {
        this.userName = userName;
        this.nextId = 1;
        this.items = []; //adding field declarations again
        this.itemMap = new Map();
        items.forEach((item) => this.itemMap.set(item.taskId, item));
    }
    addToDo(task) {
        this.itemMap.set(this.nextId, new item_1.Item(this.nextId, task));
        this.nextId++;
    }
    getToDoItems(isComplete) {
        let completedItems = [];
        this.itemMap.forEach((item) => {
            if (item.done == isComplete) {
                completedItems.push(item);
            }
        });
        return completedItems;
    }
    removeCompletedItems() {
        this.itemMap.forEach((item) => {
            if (item.done == true) {
                this.itemMap.delete(item.taskId);
            }
        });
    }
    /*    public taskDoneFIND(taskId: number) : void
      {
          // finding item through lambda function 'find' whose taskId is same as the parameter and marking it done
          this.itemMap.find((Item) => Item.taskId == taskId).done = true
      }
      */
    getTodoById(id) {
        //your error is HERE!
        //if the user attempts to find an unknown todo eg : getTodoById(10000) (assuming this Todo doesnt exist);
        //then Typescript returns an 'undefined' error. In other words, compiler pretends that you don't have an array at all.
        //therefore, I used an OR expression to tell the user that if the todo isn't found,
        // then it will throw an error.
        //solution copied from: https://stackoverflow.com/a/56540673
        //GET function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
        const todoToFind = this.itemMap.get(id) || new item_1.Item(0, "Item not found!", false);
        return todoToFind;
    }
    taskDone(taskId) {
        // finding item through lambda function 'find' whose taskId is same as the parameter and marking it done
        //console.log(this.getTodoById(taskId))
        const completedTodo = this.getTodoById(taskId);
        completedTodo.done = true;
        //      console.log("this item is now complete: ");
        //    console.log(completedTodo);
    }
    printAll() {
        this.itemMap.forEach((item) => item.printTask());
    }
}
exports.itemCollection = itemCollection;
//# sourceMappingURL=itemCollection.js.map