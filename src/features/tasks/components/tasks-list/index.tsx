import React from 'react'
import {
    ButtonGroup,
    Container,
    Flex,
    IconButton,
    ListItem,
    Text,
    UnorderedList
} from '@chakra-ui/react'
import { Task } from '../../tasks.types'
import { map } from 'lodash'
import { BsTrash } from 'react-icons/all'
import s from './task-list.module.scss'
import AddTimeButton from '../add-time-button'

interface Properties {
    tasks: Task[];
}

const TasksList: React.FC<Properties> = ({ tasks }) => {
    return (
        <Container maxW="container.xl">
            <UnorderedList marginInline={0}>
                {map(tasks, (task) => (
                    <ListItem key={task.id} className={s.root__item} listStyleType="none">
                        <Flex alignItems="center" justifyContent="space-between" h={8}>
                            <Text>{task.title} ({task.time}h)</Text>
                            <ButtonGroup className={s.root__controls}>
                                <AddTimeButton task={task} />
                                <IconButton size="sm" rounded={100} colorScheme="red" icon={<BsTrash/>}
                                            aria-label="button remove task"/>
                            </ButtonGroup>
                        </Flex>
                    </ListItem>
                ))}
            </UnorderedList>
        </Container>
    )
}

export default TasksList
