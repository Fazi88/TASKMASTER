import { TaskManager, createTaskHtml } from "./TaskManager.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", mainFunction);
} else {
  /* it finished loading*/
  mainFunction();
}

function mainFunction() {
  const tm = new TaskManager();
  tm.load()
  tm.render()
  const form = document.querySelector("form");
  form.addEventListener("submit", validFormFieldInput);

  const tasksList = document.querySelector("#tasks-list")
  tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
      const parentTask = event.target.parentElement
      const taskId = +parentTask.dataset.taskId
      tm.deleteTask(taskId)
      console.log('task deleted -> ', taskId)
      tm.save();
      tm.render()
    }
  });

  function validFormFieldInput(e) {
    e.preventDefault();
    const formData = new FormData(form);
    // const task = []
    // formData.forEach(value => task.push(value))
    // const taskHtml = createTaskHtml(task[0], task[1], task[2], task[3]);

    // if (formData.get("name") == "") {
    //   console.log("Error. Task can't be empty")
    // }
    // if (formData.get("assignedTo") == "Assign Role") {
    //   console.log("Error. Task must be assigned to someone")
    // }
    let obj = {}
    for (let [key, value] of formData)
      obj[key] = value
    tm.addTask(obj)
    tm.save();
    tm.render()
    form.reset();
  }
}