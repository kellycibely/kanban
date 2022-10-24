import { Component, IterableDiffer, IterableDiffers, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/shared/models/board.model';
import { Column } from 'src/app/shared/models/column.model';
import { Task } from 'src/app/shared/models/task.model';
import { TaskStatus } from 'src/app/shared/enuns/task-status.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board = new Board('Sprint #1', [
    new Column('Idea', [
      new Task('Task Idea 1', 'Essa é a task 1', TaskStatus.IDEA),
      new Task('Task Idea 2', 'Essa é a task 2', TaskStatus.IDEA),
      new Task('Task Idea 3', 'Essa é a task 3', TaskStatus.IDEA)
    ]),
    new Column('Research', [
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
  public status = Object.values(TaskStatus);
  iterableDiffer: any;

  constructor(private iterableDiffers: IterableDiffers) { 
    this.iterableDiffer = iterableDiffers.find([]).create(undefined);
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    const changes = this.iterableDiffer.diff(this.board.columns);
    if (changes) {
      console.log('alterado');
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    // console.log('previousIndex: ' + event.previousIndex);
    // console.log('currentIndex: ' + event.currentIndex);
    // console.log(event.item.dropContainer.data);
    console.log(event.previousContainer.id);

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

  open(item: Task) {
    console.log(item);
    this.currentTask = item;
    this.openModal= !this.openModal;
  }

}

