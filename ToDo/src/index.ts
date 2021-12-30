import { Item } from "./item";
import { itemCollection } from "./itemCollection";

let itemColl: itemCollection = new itemCollection("Zohaib")

itemColl.addToDo("Task1");
itemColl.addToDo("Task2");
itemColl.addToDo("Task3");
itemColl.addToDo("Task4");

itemColl.taskDone(3);
console.log(itemColl)
itemColl.printAll();
