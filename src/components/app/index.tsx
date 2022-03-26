import React, { useContext, useEffect } from 'react'
import Navbar from '../layout/navbar'
import { tasksContext } from '../../features/tasks/tasks.context'
import { useTasks } from '../../features/tasks/tasks.hooks'
import '../../main.scss'
import TasksList from '../../features/tasks/components/tasks-list'

const App: React.FC = () => {
    const {
        set,
        tasks
    } = useContext(tasksContext)
    const {
        tasks: retrievedTasks,
        retrieveTasks
    } = useTasks()

    useEffect(() => {
        retrieveTasks()
    }, [])

    useEffect(() => {
        set(retrievedTasks)
    }, [retrievedTasks])

    return (
        <>
            <Navbar/>
            <TasksList tasks={retrievedTasks}/>
        </>
    )
}

export default App
