import React, { useContext } from 'react'
import { map } from 'lodash'
import Navbar from "../layout/navbar";
import { tasksContext } from '../../features/tasks/tasks.context'
import '../../main.scss';

const App: React.FC = () => {
  const { tasks } = useContext(tasksContext);
  return <><Navbar />{map(tasks, (task) => (
    <li key={task.id}>{task.title}</li>
  ))}</>;
};

export default App;
