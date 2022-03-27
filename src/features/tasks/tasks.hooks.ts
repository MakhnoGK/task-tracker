import { useCallback, useContext, useEffect, useState } from 'react'
import { Task, TaskRequest } from './tasks.types'
import ApiClient from '../../lib/api-client'
import { tasksContext } from './tasks.context'

export const useAddTask = () => {
    const [savedTask, setSavedTask] = useState<Task>()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const {
        task,
        retrieveTask
    } = useTask()

    const add = useCallback(async (data: TaskRequest) => {
        setLoading(true)

        try {
            const response = await ApiClient.post('tasks', data)

            if (response) {
                await retrieveTask(response)
            }
        } catch (reason) {
            console.warn(`Error creating task: ${reason}`)
            setSuccess(false)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (task) {
            setSuccess(true)
            setSavedTask(task)
        }
    }, [task])

    return {
        add,
        loading,
        success,
        savedTask
    }
}

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(false)

    const retrieveTasks = useCallback(async () => {
        setLoading(true)

        try {
            const tasks = await ApiClient.get<Task[]>('tasks')

            setTasks(tasks)
        } catch (reason) {
            console.warn(`Error retrieving tasks: ${reason}`)
        } finally {
            setLoading(false)
        }
    }, [])

    return {
        loading,
        tasks,
        retrieveTasks
    }
}

export const useTask = () => {
    const [task, setTask] = useState<Task>()
    const [loading, setLoading] = useState(false) // TODO: use this constant

    const retrieveTask = useCallback(async (id: Task['id']) => {
        try {
            const task = await ApiClient.get<Task>('tasks', { id })

            setTask(task)
        } catch (reason) {
            console.warn(`Error retrieving task: ${reason}`)
        }
    }, [])

    return {
        retrieveTask,
        task
    }
}

export const useUpdateTask = () => {
    const { update: contextUpdate } = useContext(tasksContext)

    const update = useCallback(async (id: string, data: Task) => {
        try {
            const response = await ApiClient.post('tasks', data, id)

            if (response) {
                contextUpdate(response, data)
            }
        } catch (reason) {
            console.warn(`Error updating task: ${reason}`)
        }
    }, [contextUpdate])

    return {
        update
    }
}

export const useDeleteTask = () => {
    const [loading, setLoading] = useState(false);
    const { deleteTask: contextDelete } = useContext(tasksContext);

    const deleteTask = useCallback(async (id: string) => {
        try {
            const result = await ApiClient.delete('tasks', id);
            if (result) {
                setLoading(false);
                contextDelete(id);
            }
        } catch (reason) {
            console.warn(`Error deleting task: ${reason}`);
        }
    }, [])

    return {
        deleteTask,
        loading
    }
}
