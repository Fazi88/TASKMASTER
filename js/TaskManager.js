
export function createTaskHtml(name, description, assignedTo, dueDate, status) {
  const html = `
  <li class="list-group-item">
      <div>
          <h5>${name}</h5>
          <span>${status}</span>
      </div>
      <div>
          <small>Assigned To: ${assignedTo}</small>
          <small>Due: ${dueDate}</small>
      </div>
      <p>${description}</p>
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
    this.tasks = [...this.tasks, { id, ...obj, status }];
  }
}