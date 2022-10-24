export enum TaskStatus {
  IDEA = 'idea',
  RESEARCH = 'research',
  TODO = 'todo',
  DONE = 'done',
}

export function getEnumStatus(value: string) {
  switch(value) {
    case 'idea' : {
      return TaskStatus.IDEA;
    }
    case 'research' : {
      return TaskStatus.RESEARCH;
    }
    case 'todo' : {
      return TaskStatus.TODO;
    }
    case 'done' : {
      return TaskStatus.DONE;
    }
    default: {
      return TaskStatus.IDEA;
    }
  }
}