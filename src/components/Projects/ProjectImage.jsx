import React from 'react';
import { Image } from '@chakra-ui/react';

const ProjectImage = (props) => {
  return (
    <>
      <a href={props.demoLink} target='_blank' rel='noreferrer' title='Demo'>
        <Image
          loading='lazy'
          boxShadow='md'
          mt='2'
          mb='-2'
          src={props.appImage}
          alt={props.appTitle}
          w={{ mobile: '460px', tablet: '350px', laptop: '460px' }}
          h={{ mobile: '212px', tablet: '160px', laptop: '212px' }}
          borderRadius='9px'
          objectFit='cover'
          _hover={{
            transition: 'transform 1s, all 0.2s ease-in-out',
            transform: 'scale(1.02)',
          }}
        />
      </a>
    </>
  );
};

export default ProjectImage;
