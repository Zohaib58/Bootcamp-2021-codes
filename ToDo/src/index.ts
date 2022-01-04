import { itemCollection } from "./itemCollection";

let itemColl: itemCollection = new itemCollection("Zohaib")

itemColl.addToDo("Task1");
debugger
itemColl.addToDo("Task2");
itemColl.addToDo("Task3");
itemColl.addToDo("Task4");

itemColl.taskDone(4);
//console.log(itemColl.getTodoById(3));

console.log(itemColl.getToDoItems(true));
itemColl.removeCompletedItems();
itemColl.printAll();

//console.log(itemColl)
//itemColl.printAll();



/*
function displayTodoList(): void {
    console.log(`${itemColl.userName}'s Todo List `
    + `(${ itemColl.getItemCounts().incomplete } items to do)`);
    itemColl.getTodoById(true).forEach(item => item.printDetails());
    }
    enum Commands {
    Quit = "Quit"
    }
    function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
            }
            })
            }
            promptUser();
*/