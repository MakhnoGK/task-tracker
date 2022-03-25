import React, { useCallback, useState } from 'react'
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

const Navbar: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

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
                <Input/>
                <Flex gap={2}>
                  <Button>Save</Button>
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
