import { Item } from "./item";

export class itemCollection
{
    private nextId: number = 1;
    items: Item[] = []; //adding field declarations again
    private itemMap = new Map<number, Item>();
  
    constructor(public userName: String, items: Item[] = []) {
      items.forEach((item) => this.itemMap.set(item.taskId, item));
    }
  
    public addToDo(task: String) {
      this.itemMap.set(this.nextId, new Item(this.nextId, task));
      this.nextId++;
    }
  
    public getToDoItems(isComplete: boolean): Item[] {
      let completedItems: Array<Item> = [];
      this.itemMap.forEach((item) => {
        if (item.done == isComplete) {
          completedItems.push(item);
        }
      });
      return completedItems;
    }
    public removeCompletedItems(): void {
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
    public getTodoById(id: number): Item {
      //your error is HERE!
      //if the user attempts to find an unknown todo eg : getTodoById(10000) (assuming this Todo doesnt exist);
      //then Typescript returns an 'undefined' error. In other words, compiler pretends that you don't have an array at all.
      //therefore, I used an OR expression to tell the user that if the todo isn't found,
      // then it will throw an error.
      //solution copied from: https://stackoverflow.com/a/56540673
      //GET function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
      const todoToFind =
        this.itemMap.get(id) || new Item(0, "Item not found!", false);
  
      return todoToFind;
    }
    public taskDone(taskId: number): void {
      // finding item through lambda function 'find' whose taskId is same as the parameter and marking it done
      //console.log(this.getTodoById(taskId))
      const completedTodo = this.getTodoById(taskId);
      completedTodo.done = true;
//      console.log("this item is now complete: ");
  //    console.log(completedTodo);
    }
    public printAll() {
      this.itemMap.forEach((item) => item.printTask());
    }
}
