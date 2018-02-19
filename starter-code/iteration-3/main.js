class TodoItem {
    constructor(title) {
        this.title = title;
        this.updatedAt = new Date();
    }
    toggleStatus() {
        this.status = !this.status;
        this.updatedAt = new Date();
    }
}
class TodoList {
    constructor() {
        this.myTasks = [];
    }
    addTask(task) {
        this.myTasks.push(task);
        console.log("Task added!");
        return this.myTasks.length;
    }
    listAllTasks() {
        this.myTasks.forEach(t => {
            console.log(t);
        });
    }
    deleteTask(task) {
        for (let i = 0; i < this.myTasks.length; i++) {
            if (this.myTasks[i] == task) {
                this.myTasks.splice(i, 1);
                console.log("Task deleted!");
            }
        }
        return this.myTasks.length;
    }
    listUncomplete() {
    }
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
