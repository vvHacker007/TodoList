let allTasks = [
    "Go to Gym",
    "Eat more healthy food",
    "Drink Water",
    "Go for a run"
];

export function addTask(task) {
    console.log("Task Added Successfully:", task)
    allTasks.push(task)
}

export function getTasks() {
    console.log("Final Call for All Tasks:", allTasks)
    return [...allTasks];
}

export function getTask(index) {
    return allTasks[index];
}

export function deleteTask(index) {
    console.log("Task Deleted Successfully:", allTasks[index])
    console.log("Delete Task at index", index);
    allTasks.splice(index, 1);
    console.log("All Tasks", allTasks);
}

export function updateTask(index, updatedTask) {
    allTasks[index] = updatedTask;
}