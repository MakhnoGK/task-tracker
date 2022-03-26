import React, { useContext, useEffect } from 'react'
import { forEach, map } from 'lodash'
import Navbar from "../layout/navbar";
import { tasksContext } from '../../features/tasks/tasks.context'
import { useTasks } from '../../features/tasks/tasks.hooks'
import '../../main.scss';

const App: React.FC = () => {
  const { set, tasks } = useContext(tasksContext);
  const { tasks: retrievedTasks, retrieveTasks } = useTasks();

  useEffect(() => {
    retrieveTasks();
  }, []);

  useEffect(() => {
    set(retrievedTasks);
  }, [retrievedTasks]);

  return <><Navbar />{map(tasks, (task) => (
    <li key={task.id}>{task.title}</li>
  ))}</>;
};

export default App;
