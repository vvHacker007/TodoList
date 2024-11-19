let constTasks = [
    {"task": "Go to Gym", "isDone": false},
    {"task": "Eat more healthy food", "isDone": false},
    {"task": "Drink Water", "isDone": false},
    {"task": "Go for a run", "isDone": false}
];

let allTasks = [];

export function addTask(task) {
    const newTask = {};
    newTask.task = task;
    newTask.isDone = false;
    console.log("Task Added Successfully:", task)
    allTasks.push(newTask)
    saveTasksToLocalStorage();
}

export function updateTodoStatus(index) {
    const task = getTask(index)
    const changedStatus = !task.isDone;
    task.isDone = changedStatus;
    console.log("Task Done Successfully:", task)
    allTasks[index] = task;
    saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    console.log("Tasks saved to local storage:", allTasks);
}

export function getTasks() {

    console.log("Local Datra:", localStorage.getItem("tasks"))
    if(!allTasks || allTasks.length === 0 && localStorage.getItem("tasks") === null) {
        allTasks = constTasks;
        saveTasksToLocalStorage();
    }
    console.log("Final Call for All Tasks:", localStorage.getItem("tasks"))
    allTasks = JSON.parse(localStorage.getItem("tasks"));
    return [...allTasks];
}

export function getTask(index) {
    allTasks = JSON.parse(localStorage.getItem("tasks"));
    return allTasks[index];
}

export function deleteTask(index) {
    console.log("Task Deleted Successfully:", allTasks[index])
    console.log("Delete Task at index", index);
    allTasks.splice(index, 1);
    saveTasksToLocalStorage();
    console.log("All Tasks", allTasks);
}

export function updateTask(index, updatedTask) {
    allTasks[index].task = updatedTask;
    saveTasksToLocalStorage();
}