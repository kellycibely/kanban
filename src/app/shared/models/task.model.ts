import { TaskStatus } from "../enuns/task-status.enum";

export class Task {
  constructor(public title: string, public description: string, public status: TaskStatus) {}
}