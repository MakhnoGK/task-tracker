import React from 'react'
import {
    ButtonGroup,
    Container,
    Flex,
    ListItem,
    Text,
    UnorderedList
} from '@chakra-ui/react'
import { Task } from '../../tasks.types'
import { map } from 'lodash'
import s from './task-list.module.scss'
import AddTimeButton from '../add-time-button'
import DeleteTaskButton from '../delete-task-button'

interface Properties {
    tasks: Task[];
}

const TasksList: React.FC<Properties> = ({ tasks }) => {
    return (
        <Container maxW="container.xl">
            {tasks.length > 0 ? (
                <UnorderedList marginInline={0}>
                    {map(tasks, (task) => (
                        <ListItem key={task.id} className={s.root__item} listStyleType="none" padding={2}
                                  _hover={{ backgroundColor: 'gray.50', borderRadius: 8 }}>
                            <Flex alignItems="center" justifyContent="space-between" h={8}>
                                <Text>{task.title} ({task.time}h)</Text>
                                <ButtonGroup className={s.root__controls}>
                                    <AddTimeButton task={task}/>
                                    <DeleteTaskButton id={task.id}/>
                                </ButtonGroup>
                            </Flex>
                        </ListItem>
                    ))}
                </UnorderedList>
            ) : (
                <Text textAlign="center" textColor="gray.400" userSelect="none">No tasks found</Text>
            )}
        </Container>
    )
}

export default TasksList
