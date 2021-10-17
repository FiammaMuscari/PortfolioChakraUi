import React from 'react';
import { Container, Box, IconButton } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import GoTop from '../GoTop';
import { UilMouseAlt } from '@iconscout/react-unicons';

const Home = ({ isScrolling }) => {
  const goToSecondSection = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Container
        id='home'
        maxW='container.xl'
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        position='relative'
        width='100%'
        flexDirection='column'
      >
        <Box display='flex' p='8'>
          <HomeText />
          <HomeImage />
        </Box>
        <Box alignSelf='flex-start' position='absolute' top='90%'>
          <Social />
        </Box>
        <Box position='absolute' top='90%'>
          <IconButton
            onClick={() => {
              goToSecondSection();
            }}
          >
            <UilMouseAlt size='1.8rem' />
          </IconButton>
        </Box>
        <Box position='absolute' top='90%' right='95' zIndex='100'>
          <Box position='fixed'>
            <GoTop isScrolling={isScrolling} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
