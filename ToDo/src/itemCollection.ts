import { Item } from "./item";

export class itemCollection
{
    private nextId: number = 1;

    private itemMap = new Map<number, Item>();

    constructor(public userName: String, public items: Item[] =  [])
    {
        items.forEach((item) => this.itemMap.set(item.taskId, item));

    }

    public addToDo(task: String)
    {
        this.itemMap.set(this.nextId, new Item(this.nextId, task))
    }

    public getTodoById(id: number) : Item 
    {
        return this.itemMap.get(id)
    }

    /*
    public taskDoneFIND(taskId: number)
    {
        // finding item through lambda function 'find' whose taskId is same as the parameter and marking it done
        this.items.find((Item) => Item.taskId == taskId).done = true
    }
    */

    public taskDone(taskId: number)
    {
        // finding item through lambda function 'find' whose taskId is same as the parameter and marking it done
        this.getTodoById(taskId).done == true
    }
    
    public printAll()
    {
        this.items.forEach((item: Item) => item.printTask());
    }
}