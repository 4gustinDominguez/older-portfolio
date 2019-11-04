import * as React from 'react';

import SocialNetworkContainer from '../../layouts/inline-layout';

import { Mode } from '../../app.model';

import { Title } from '../../common/styled-fonts';
import { TitleContainer } from './header.styled';

import { NavigationBar, ModeSwitch } from '../../common';
import { createHighlightedSocialNetworks, createCategories } from './header.business';

type HeaderProps = {
  handleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ handleMode, mode }) => {
  const mainTitle = 'frangaliana';

  const categories = createCategories();
  //const highlightedSocialNetworks = createHighlightedSocialNetworks();

  return (
    <>
      <TitleContainer>
        <Title>{mainTitle}</Title>
        {/*
            <SocialNetworkContainer>
              {highlightedSocialNetworks &&
                highlightedSocialNetworks.map(({ title, icon, url }, index) => (
                  <IconButton key={`${title}-${index}`} imageSrc={icon} url={url} target={'_blank'} mode={mode} />
                ))}
            </SocialNetworkContainer>
        */}
        <ModeSwitch mode={mode} toggleMode={handleMode} />
      </TitleContainer>
      <NavigationBar categories={categories} mode={mode} />
    </>
  );
};
