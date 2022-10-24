import { Component, IterableDiffer, IterableDiffers, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/shared/models/board.model';
import { Column } from 'src/app/shared/models/column.model';
import { Task } from 'src/app/shared/models/task.model';
import { TaskStatus, getEnumStatus } from 'src/app/shared/enuns/task-status.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board = new Board('Sprint #1', [
    new Column('idea', [
      new Task('Task Idea 1', 'Essa é a task 1', TaskStatus.IDEA),
      new Task('Task Idea 2', 'Essa é a task 2', TaskStatus.IDEA),
      new Task('Task Idea 3', 'Essa é a task 3', TaskStatus.IDEA)
    ]),
    new Column('research', [
      new Task('Task Research 1', 'Essa é a task 1', TaskStatus.RESEARCH),
      new Task('Task Research 2', 'Essa é a task 2', TaskStatus.RESEARCH),
      new Task('Task Research 3', 'Essa é a task 3', TaskStatus.RESEARCH)
    ]),
    new Column('todo', [
      new Task('Task todo 1', 'Essa é a task 1', TaskStatus.TODO),
      new Task('Task todo 2', 'Essa é a task 2', TaskStatus.TODO),
      new Task('Task todo 3', 'Essa é a task 3', TaskStatus.TODO)
    ]),
    new Column('done', [
      new Task('Task 1 done', 'Essa é a task 1', TaskStatus.DONE),
      new Task('Task 2 done', 'Essa é a task 2', TaskStatus.DONE),
      new Task('Task 3 done', 'Essa é a task 3', TaskStatus.DONE)
    ]),
    
  ])
  public openModal = false;
  public currentTask: any;
  public currentTaskIndex: any;
  public status = Object.values(TaskStatus);

  constructor() { 
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task[]>) {
    // console.log('Saiu do: ' + event.previousContainer.id + ' index: ' + event.previousIndex);
    // console.log('Para: ' + event.container.id + ' index: ' +  event.currentIndex);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    // console.log("Array que recebeu o item");
    // console.log(event.container.data)

    this.updateColumn(event.container.id);
  }

  open(item: Task, i: number) {
    this.currentTask = item;
    this.currentTaskIndex = i;
    this.openModal= !this.openModal;
  }

  updateColumn(columnName: string) {
    const column = this.board.columns.find(cl => cl.name === columnName);
    if (column) {
      column.tasks.forEach(ts => ts.status = getEnumStatus(columnName.toLowerCase()))
      const indexColumn = this.board.columns.indexOf(column);
      this.board.columns[indexColumn] = column;
    }
  }

  moveTask(task: any, nextListName: string) {
    const nextColumn = this.board.columns.find(cl => cl.name === nextListName);
    const previousColumn = this.board.columns.find(cl => cl.name === task?.status);
    if ((nextColumn && previousColumn) && nextColumn.name !== previousColumn.name) {
      nextColumn.tasks.push(task);
      previousColumn.tasks = previousColumn.tasks.filter(ts => ts !== task);

      this.updateColumn(nextColumn.name);
    }
  }

  onTitleChange(newTitle: string) {
    this.currentTask.title = newTitle;
    const column = this.board.columns.find(cl => cl.name === this.currentTask.status);
     if (column) {
      const indexColumn = this.board.columns.indexOf(column);
      this.board.columns[indexColumn].tasks[this.currentTaskIndex] = this.currentTask;
     }
  }

  onDescriptionChange(newDescription: string) {
    this.currentTask.description = newDescription;
    const column = this.board.columns.find(cl => cl.name === this.currentTask.status);
     if (column) {
      const indexColumn = this.board.columns.indexOf(column);
      this.board.columns[indexColumn].tasks[this.currentTaskIndex] = this.currentTask;
     }
  }
}

