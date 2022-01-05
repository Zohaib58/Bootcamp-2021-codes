"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
const inquirer = require("inquirer");
let itemColl = new itemCollection_1.itemCollection("Zohaib");
let showCompleted = false;
itemColl.addToDo("Task1");
debugger;
itemColl.addToDo("Task2");
itemColl.addToDo("Task3");
itemColl.addToDo("Task4");
itemColl.taskDone(4);
/*
itemColl.taskDone(4);
//console.log(itemColl.getTodoById(3));

console.log(itemColl.getToDoItems(true));
itemColl.removeCompletedItems();
itemColl.printAll();

//console.log(itemColl)
//itemColl.printAll();


*/
function displayTodoList() {
    console.log(`${itemColl.userName}'s Todo List `
        + `(${itemColl.getItemCounts().incomplete} items to do)`);
    //itemColl.printAll();
    itemColl.getToDoItems(showCompleted).forEach(item => item.printTask());
    //getToDoItems(false).forEach(item => item.printTask());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Quit"] = "Quit";
    Commands["Toggle"] = "Show/Hide Completed";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answers => {
        if (answers["add"] !== "") {
            itemColl.addToDo(answers["add"]);
        }
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
        }
    });
}
promptUser();
//# sourceMappingURL=index.js.map