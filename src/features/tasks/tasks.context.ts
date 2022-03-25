import { createContext } from 'react';
import { TasksContext } from './tasks.types'

export const tasksContext = createContext<TasksContext>({
  tasks: [],
  add: (task) => {}
});
