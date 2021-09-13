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