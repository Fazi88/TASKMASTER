if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", mainFunction);
} else {
  /* it finished loading*/
  mainFunction();
}

function mainFunction() {
  const form = document.querySelector("form");
  form.addEventListener("submit", validFormFieldInput);

  function validFormFieldInput(e) {
    e.preventDefault();
    const taskInput = document.querySelector(".task-input");
    if (taskInput.value == "") {
      taskInput.focus();
      console.log("Error. Task can't be empty")
    }
  }
}