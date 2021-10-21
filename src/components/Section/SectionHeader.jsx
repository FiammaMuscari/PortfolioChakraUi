import React from 'react';
import { Text } from '@chakra-ui/react';

const SectionHeader = (props) => {
  return (
    <>
      <Text
        position={{ base: 'flex', md: 'absolute', lg: 'absolute' }}
        top='13%'
        fontWeight='bold'
        fontSize='2xl'
        bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
        bgClip='text'
      >
        {props.title}
      </Text>
    </>
  );
};

export default SectionHeader;