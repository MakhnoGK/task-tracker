import React, { useCallback, useContext, useState } from 'react'
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer
} from '@chakra-ui/react'
import { BsPlus, AiOutlineFilter } from 'react-icons/all'
import { tasksContext } from '../../../features/tasks/tasks.context'

const Navbar: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const { add, tasks } = useContext(tasksContext);

  const addCallback = useCallback(() => {
    add({
      id: tasks.length,
      title: taskName,
      time: 0
    });

    setTaskName('');
    setPopoverOpen(false);
  }, [tasks.length, taskName]);

  const inputCallback = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  }, []);

  const openCallback = useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const closeCallback = useCallback(() => {
    setPopoverOpen(false);
  }, []);

  return (
    <Flex margin={4}>
      <Heading>Tracker</Heading>
      <Spacer/>
      <Flex gap={2}>
        <Popover placement='bottom-end' isOpen={popoverOpen}>
          <PopoverTrigger>
            <IconButton onClick={openCallback} rounded={100} aria-label="create button" icon={<BsPlus size={24}/>}/>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Flex direction='column' gap={2}>
                <Input placeholder='Enter task info' value={taskName} onInput={inputCallback} />
                <Flex gap={2}>
                  <Button onClick={addCallback}>Save</Button>
                  <Button onClick={closeCallback} colorScheme='red'>Cancel</Button>
                </Flex>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <IconButton rounded={100} aria-label="create button" icon={<AiOutlineFilter size={18}/>}/>
      </Flex>
    </Flex>
  );
}

export default Navbar
