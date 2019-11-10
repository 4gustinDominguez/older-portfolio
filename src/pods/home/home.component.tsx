import * as React from 'react';

import { HomeContainer } from './home.styled';
import { Title, Subtitle, Text } from '../../common/styled-fonts';
import { createIntroduction, createContactLink } from './home.business';
import { ImageButton } from '../../common';

type HomeProps = {};

export const Home: React.FC<HomeProps> = props => {
  const { title, subtitle, text } = createIntroduction();
  const contactLink = createContactLink();

  return (
    <HomeContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Text>{text}</Text>
      <ImageButton iconLink={contactLink} iconSize={3} />
    </HomeContainer>
  );
};
