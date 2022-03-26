import React, { useCallback, useMemo, useState } from 'react'
import { tasksContext} from '../tasks.context'
import { Task, TasksContext } from '../tasks.types'

export const TasksContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const add = useCallback((task: Task) => {
    setTasks((prevState) => [task, ...prevState]);
  }, []);

  const set = useCallback((tasks: Task[]) => {
    setTasks(tasks);
  }, []);

  const memoizedValue: TasksContext = useMemo(() => ({
    tasks,
    add,
    set
  }), [add, tasks]);

  return (
    <tasksContext.Provider value={memoizedValue}>
      {children}
    </tasksContext.Provider>
  );
};
