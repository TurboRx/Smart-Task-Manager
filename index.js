let myFirstTask = "Set up VS Code";
console.log(myFirstTask);

let tasks = ["Set up VS Code", "Learn JavaScript", "Build a Project"];
console.log(tasks[0]);

tasks.push("Master Arrays");
console.log(tasks);

tasks.pop();
console.log(tasks);

function addTask(newTaskName) {
 tasks.push(newTaskName);
  console.log("Success! Added: " + newTaskName);
}

addTask("Learn about functions");

function displayTasks() {
  console.log("--- MY TASK LIST ---");
  for (let i = 0; i < tasks.length; i++) {
    console.log(i + " - " + tasks[i]);
  }
  console.log("--------------------");
}

displayTasks();

function completeTask(taskNumber) {
  // .splice needs two things: (where to start, how many to delete)
  let removed = tasks.splice(taskNumber, 1);
  console.log("Great Job! You have finished: " + removed[0]);
  displayTasks();
}
completeTask(1);

