export interface Task {
  id: string;
  title: string;
  time: number;
}

export interface TaskRequest extends Omit<Task, 'id'> {

}

export interface TasksContext {
  tasks: Task[];
  add: (task: Task) => void;
  set: (tasks: Task[]) => void;
  update: (id: string, task: Task) => void;
  deleteTask: (id: string) => void;
}
