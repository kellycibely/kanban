export enum TaskStatus {
  IDEA = 'idea',
  TODO = 'todo',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export function getEnumStatus(value: string) {
  switch(value) {
    case 'idea' : {
      return TaskStatus.IDEA;
    }
    case 'todo' : {
      return TaskStatus.TODO;
    }
    case 'done' : {
      return TaskStatus.DONE;
    }
    case 'in progress' : {
      return TaskStatus.IN_PROGRESS;
    }
    default: {
      return TaskStatus.IDEA;
    }
  }
}