import { TaskStatus } from "../enuns/task-status.enum";

export class Task {
  constructor(public title: string, public desciption: string, public status: TaskStatus) {}
}