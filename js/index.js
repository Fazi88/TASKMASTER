import { TaskManager, createTaskHtml } from "./TaskManager.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", mainFunction);
} else {
  /* it finished loading*/
  mainFunction();
}

function mainFunction() {
  const tm = new TaskManager();
  const form = document.querySelector("form");
  form.addEventListener("submit", validFormFieldInput);

  function validFormFieldInput(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const task = []
    formData.forEach(value => task.push(value))
    const taskHtml = createTaskHtml(task[0], task[1], task[2], task[3]);
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
    // console.log(tm.tasks)
    form.reset();
  }
}