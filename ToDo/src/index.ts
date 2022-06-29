import { itemCollection } from "../src/itemCollection";
import * as inquirer from 'inquirer';

let itemColl: itemCollection = new itemCollection("Zohaib")
let showCompleted: boolean = false

itemColl.addToDo("Task1");
debugger
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
function displayTodoList(): void {
    console.log(`${itemColl.userName}'s Todo List `
        + `(${itemColl.getItemCounts().incomplete} items to do)`);
    //itemColl.printAll();

    itemColl.getToDoItems(showCompleted).forEach(item => item.printTask());


    //getToDoItems(false).forEach(item => item.printTask());
}

enum Commands {
    Add = "Add New Task",
    Quit = "Quit",
    Toggle = "Show/Hide Completed",
    Completed = "Task Completed"
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answers => {
            if (answers["add"] !== "") {
                itemColl.addToDo(answers["add"]);
            }
            promptUser();
        })
}
// choices: collection.getTodoItems(showCompleted).map(item => 
// ({name: item.task, value: item.id, checked: item.complete}))
function promptTaskCompleted(): void {
    console.clear();
    inquirer.prompt({
        type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: itemColl.getToDoItems(showCompleted).map(item => ({ name: item.task, value: item.taskId, checked: item.done })) as any
    }).then(answers => {
        let completedTasks = answers["complete"] as number[];
        itemColl.getToDoItems(true).forEach(item =>
            itemColl.markComplete(item.taskId, completedTasks.find(id => id === item.taskId) != undefined))
        promptUser();
    })
}



function promptUser(): void {
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
            case Commands.Completed:
                if (itemColl.getItemCounts().incomplete > 0) {
                    promptTaskCompleted();
                } else {
                    promptUser();
                }
                break;
        }
    })
}
promptUser();