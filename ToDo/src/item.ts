export class Item{

    public constructor(public taskId: number, public task: String, public done: boolean = false)
    {

    }
    public printTask(): void
    {
        console.log(`id = ${this.taskId}, Task: ${this.task}, Completed: ${this.done}`)


    }
}