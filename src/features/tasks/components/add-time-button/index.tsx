import React from 'react'
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

interface Properties {
    taskId: string;
}

const AddTimeButton: React.FC<Properties> = () => {
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
                                <Input type='number' placeholder='0' />
                                <ButtonGroup>
                                    <IconButton aria-label="button add-time save" icon={<BsCheck/>}/>
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
