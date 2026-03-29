let tasks = [
  { name: "Set up VS Code", isComplete: false },
  { name: "Learn JavaScript", isComplete: false },
  { name: "Build a Project", isComplete: false }
];

function addTask(newTaskName) {
  let newTask = {
    name: newTaskName, 
    isComplete: false
  };
  tasks.push(newTask);
  console.log("Success! Added: " + newTaskName);
}

function displayTasks() {
  console.log("--- MY TASK LIST ---");
  for (let i = 0; i < tasks.length; i++) {
    let status = tasks[i].isComplete ? "[✔]" : "[ ]";
    console.log(i + " - " + status + " " + tasks[i].name);
  }
  console.log("--------------------");
}

function completeTask(taskNumber) {
  tasks[taskNumber].isComplete = true; 
  console.log("Great Job! You have finished: " + tasks[taskNumber].name);
  displayTasks();
}

addTask("Learn about functions");
displayTasks();
completeTask(1);
