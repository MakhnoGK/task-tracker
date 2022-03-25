import React from 'react';
import { Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { BsPlus, AiOutlineFilter } from 'react-icons/all';

const Navbar: React.FC = () => (
    <Flex margin={4}>
        <Heading>Tracker</Heading>
        <Spacer />
        <Flex gap={2}>
            <IconButton rounded={100} aria-label='create button' icon={<BsPlus size={24} />} />
            <IconButton rounded={100} aria-label='create button' icon={<AiOutlineFilter size={18} />} />
        </Flex>
    </Flex>
);

export default Navbar;
