import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/shared/models/board.model';
import { Column } from 'src/app/shared/models/column.model';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board = new Board('Sprint #1', [
    new Column('Idea', [
      new Task('Task Idea 1', 'Essa é a task 1', 'Priorizado'),
      new Task('Task Idea 2', 'Essa é a task 2', 'Priorizado'),
      new Task('Task Idea 3', 'Essa é a task 3', 'Priorizado')
    ]),
    new Column('Research', [
      new Task('Task Research 1', 'Essa é a task 1', 'Research'),
      new Task('Task Research 2', 'Essa é a task 2', 'Research'),
      new Task('Task Research 3', 'Essa é a task 3', 'Research')
    ]),
    new Column('todo', [
      new Task('Task todo 1', 'Essa é a task 1', 'tudo'),
      new Task('Task todo 2', 'Essa é a task 2', 'tudo'),
      new Task('Task todo 3', 'Essa é a task 3', 'tudo')
    ]),
    new Column('done', [
      new Task('Task 1 done', 'Essa é a task 1', 'done'),
      new Task('Task 2 done', 'Essa é a task 2', 'done'),
      new Task('Task 3 done', 'Essa é a task 3', 'done')
    ]),
    
  ])
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task[]>) {
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
  }

  open(item: any) {
    console.log(item);
  }

}
