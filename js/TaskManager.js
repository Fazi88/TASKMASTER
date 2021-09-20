export function createTaskHtml(id, name, description, assignedTo, dueDate, status) {
  const html = `
  <li data-task-id="${id}">
      <div>
          <h5>${name}</h5>
      </div>
      <div>
          <small>Assigned To: ${assignedTo}</small>
          <small>Due: ${dueDate}</small>
      </div>
      <p>${description}</p>
      <button class="delete-button">Delete</button> 
  </li>
  `
  return html
}

export class TaskManager {
  constructor() {
    this.id = 0;
    this.status = "TODO";
    this.tasks = [];
  }
  addTask(obj) {
    this.id++
    const id = this.id
    const status = this.status
    console.log("Current ID -> ", this.id)
    this.tasks = [...this.tasks, { id, ...obj, status }];
  }
  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }
  render() {
    // Iterate this.tasks so we can get all the tasksHTML
    const tasksHtmlList = this.tasks?.map(task => {
      // TODO: formatted date
      let formattedDate = new Date(task.dueDate).toLocaleDateString();
      // debugger
      return createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.dueDate, task.status)
    }).join('')
    document.getElementById('tasks-list').innerHTML = tasksHtmlList;
  }
  save() {
    const tasksJson = JSON.stringify(this.tasks)
    localStorage.setItem('tasks', tasksJson)
    const currentId = this.id.toString()
    localStorage.setItem('currentId', currentId)
  }
  load() {
    const tasksJson = localStorage.getItem('tasks')
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson)
      this.id = parseInt(localStorage.getItem('currentId'))
    }
  }
}

