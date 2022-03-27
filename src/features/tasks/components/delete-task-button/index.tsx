import React, { useCallback } from 'react'
import { BsTrash } from 'react-icons/all'
import { IconButton } from '@chakra-ui/react'
import { useDeleteTask } from '../../tasks.hooks'

interface Properties {
    id: string;
}

const DeleteTaskButton: React.FC<Properties> = ({ id }) => {
    const {
        deleteTask,
        loading
    } = useDeleteTask()

    const clickCallback = useCallback(async () => {
        await deleteTask(id)
    }, [])

    return (
        <IconButton size="sm" rounded={100} colorScheme="red" icon={<BsTrash/>}
                    aria-label="button remove task" onClick={clickCallback} isLoading={loading}/>
    )
}

export default DeleteTaskButton
