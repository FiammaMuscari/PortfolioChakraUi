import React from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ProjectHeader from './ProjectHeader';
import ProjectImage from './ProjectImage';

const Layout = (props) => {
  const { t } = useTranslation();
  const {
    appType, appTitle, appImage, codeLink, demoLink,
  } = props;

  return (
    <>
      <Box>
        <ProjectHeader
          appType={t(appType.toString())}
          appTitle={t(appTitle.toString())}
          codeLink={t(codeLink.toString())}
          demoLink={t(demoLink.toString())}
        />
        <ProjectImage
          appImage={t(appImage.toString())}
          appTitle={t(appTitle.toString())}
          demoLink={t(demoLink.toString())}
        />
      </Box>
    </>
  );
};

export default Layout;
