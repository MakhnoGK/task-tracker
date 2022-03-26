import React, { useCallback, useState } from 'react'
import {
    ButtonGroup,
    IconButton,
    Input,
    InputGroup,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger
} from '@chakra-ui/react'
import { BsCheck, BsPlus, CgClose } from 'react-icons/all'
import { useUpdateTask } from '../../tasks.hooks'
import { Task } from '../../tasks.types'

interface Properties {
    task: Task;
}

const AddTimeButton: React.FC<Properties> = ({ task }) => {
    const [time, setTime] = useState(0);
    const { update } = useUpdateTask()

    const addTimeCallback = useCallback(async (onClose) => {
        await update(task.id, { ...task, time })
        onClose?.();
    }, [time])

    const changeTimeCallback = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(Number(event.target.value));
    }, [])

    return (
        <Popover placement="left">
            {({
                onClose
            }) => (
                <>
                    <PopoverTrigger>
                        <IconButton size="sm" rounded={100} icon={<BsPlus/>}
                                    aria-label="button add-time"/>
                    </PopoverTrigger>
                    <PopoverContent maxW={200}>
                        <PopoverBody>
                            <InputGroup gap={2}>
                                <Input type="number" placeholder="0" value={time} onChange={changeTimeCallback}/>
                                <ButtonGroup>
                                    <IconButton aria-label="button add-time save" icon={<BsCheck/>}
                                                onClick={() => addTimeCallback(onClose)}/>
                                    <IconButton aria-label="button add-time cancel" icon={<CgClose/>}
                                                onClick={onClose}/>
                                </ButtonGroup>
                            </InputGroup>
                        </PopoverBody>
                    </PopoverContent>
                </>
            )}
        </Popover>
    )
}

export default AddTimeButton
