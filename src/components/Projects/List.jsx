import React from 'react';
import { Flex, Spacer, Box } from '@chakra-ui/react';
import Layout from './Layout';
import { useTranslation } from 'react-i18next';

const List = () => {
  const { t } = useTranslation();
  return (
    <>
      <Flex display='flex' justifyContent='center'>
        <Box p='6'>
          <Layout
            appType={t('ToDoAppType.1')}
            appTitle={t('ToDoAppTitle.1')}
            codeLink='https://github.com/en44no/todo-app'
            demoLink='https://todo-app-en44no.vercel.app/'
            appImage='https://i.imgur.com/xpy1bPD.png'
            techs={[
              { name: 'ReactJS', link: 'https://es.reactjs.org/' },
              { name: 'Chakra UI', link: 'https://chakra-ui.com/' },
            ]}
          />
        </Box>
        <Spacer />
        <Box p='6'>
          <Layout
            appType='Example'
            appTitle='Example'
            codeLink='Example'
            demoLink='Example'
            appImage='https://us.123rf.com/450wm/roxanabalint/roxanabalint1308/roxanabalint130800213/21703166-ejemplo-grunge-sello-de-goma-ilustraci%C3%B3n-vectorial.jpg?ver=6'
            techs={[
              { name: 'Example', link: 'Example' },
              { name: 'Example', link: 'Example' },
            ]}
          />
        </Box>
      </Flex>
    </>
  );
};

export default List;