"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
let itemColl = new itemCollection_1.itemCollection("Zohaib");
itemColl.addToDo("Task1");
itemColl.addToDo("Task2");
itemColl.addToDo("Task3");
itemColl.addToDo("Task4");
itemColl.taskDone(3);
//console.log(itemColl)
itemColl.printAll();
