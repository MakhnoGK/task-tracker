import React, { useCallback, useMemo, useState } from 'react'
import { tasksContext } from '../tasks.context'
import { Task, TasksContext } from '../tasks.types'
import { map } from 'lodash'

export const TasksContextProvider: React.FC = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])

    const add = useCallback((task: Task) => {
        setTasks((prevState) => [task, ...prevState])
    }, [])

    const set = useCallback((tasks: Task[]) => {
        setTasks(tasks)
    }, [])

    const update = useCallback((id: string, task: Task) => {
        const updatedTasks = map(tasks, (item) => item.id === id ? ({ ...item, ...task }) : item)
        setTasks(updatedTasks)
    }, [tasks])

    const memoizedValue: TasksContext = useMemo(() => ({
        tasks,
        add,
        set,
        update
    }), [add, tasks, update])

    return (
        <tasksContext.Provider value={memoizedValue}>
            {children}
        </tasksContext.Provider>
    )
}
