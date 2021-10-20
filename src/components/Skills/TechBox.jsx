import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TechBox = (props) => {
  return (
    <>
      <Box
        bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
        w='9rem'
        p='0.15rem'
        borderRadius='9px'
        mt='2'
        overflow='hidden'
        boxSizing='content-box'
        _hover={{
          transition: 'transform 1s, all 0.2s ease-in-out',
          transform: 'scale(1.03)',
        }}
      >
        <a
          href={props.link}
          target='_blank'
          rel='noreferrer'
          title={`Link to ${props.title} page`}
        >
          <Box w='9rem' h='8rem' bg='white' p='4' borderRadius='9px'>
            <Box p='2' borderRadius='9px' textAlign='-webkit-center'>
              <props.techIcon
                color={props.techColor}
                fontSize='50px'
                title={`Link to ${props.title} page`}
              />
            </Box>
            <Text
              fontWeight='semibold'
              textAlign='center'
              mb='0'
              color={props.techColor}
            >
              {props.title}
            </Text>
          </Box>
        </a>
      </Box>
    </>
  );
};

export default TechBox;