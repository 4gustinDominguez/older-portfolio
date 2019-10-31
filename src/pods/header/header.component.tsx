import * as React from 'react';

import SocialNetworkContainer from '../../layouts/inline-layout';

import { SvgFile, Mode } from '../../app.model';
import { ModeSwitch, SVGButton } from '../../common';

import linkedinIcon from '../../assets/images/linkedin.svg';
import githubIcon from '../../assets/images/github.svg';
import stackoverflowIcon from '../../assets/images/stackoverflow.svg';
import { Title } from '../../common/styled-fonts';
import { TitleContainer } from './header.styled';

type HeaderProps = {
  handleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ handleMode, mode }) => {
  const mainTitle = 'frangaliana';

  const highlightedSocialNetworks: SvgFile[] = [
    {
      title: 'Linkedin',
      icon: linkedinIcon,
      url: 'https://es.linkedin.com/in/frangaliana',
    },
    {
      title: 'Github',
      icon: githubIcon,
      url: 'https://github.com/frangaliana',
    },
    {
      title: 'StackOverflow',
      icon: stackoverflowIcon,
      url: 'https://stackoverflow.com/users/8534267/fg93',
    },
  ];

  return (
    <>
      <TitleContainer>
        <Title>{mainTitle}</Title>
        <SocialNetworkContainer>
          {highlightedSocialNetworks &&
            highlightedSocialNetworks.map(({ title, icon, url }, index) => (
              <SVGButton
                key={`${title}-${index}`}
                title={title}
                image={icon}
                hrefUrl={url}
                target={'_blank'}
                mode={mode}
              />
            ))}
        </SocialNetworkContainer>
      </TitleContainer>
      <ModeSwitch toggleMode={handleMode} mode={mode} />
    </>
  );
};
