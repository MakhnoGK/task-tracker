export interface Task {
  id: number;
  title: string;
  time: number;
}

export interface TasksContext {
  tasks: Task[];
  add: (task: Task) => void;
}
