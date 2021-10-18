import React from 'react';
import { IconButton, Container, Box } from '@chakra-ui/react';
import { UilArrowUp } from '@iconscout/react-unicons';

const GoTop = ({ isScrolling }) => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Container maxW='container.xl'>
        <Box display='block' float='right' mr='4.1rem'>
          {isScrolling > 100 ? (
            <IconButton
              className='goTop'
              onClick={() => goToTop()}
              zIndex='100'
              bg='#11BAE5'
              top='90%'
              position='fixed'
              cursor='pointer'
            >
              <UilArrowUp size='1.8rem' />
            </IconButton>
          ) : null}
        </Box>
      </Container>
    </>
  );
};

export default GoTop;
