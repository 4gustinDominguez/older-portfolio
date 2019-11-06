import * as React from 'react';
import { Mode } from '../../app.model';
import { HomeContainer } from './home.styled';
import { Title, Subtitle, Text } from '../../common/styled-fonts';
import { createIntroduction, createContactLink } from './home.business';
import { ImageButton } from '../../common';

type HomeProps = {
  mode: Mode;
};

export const Home: React.FC<HomeProps> = ({ mode }) => {
  const { title, subtitle, text } = createIntroduction();
  const contactLink = createContactLink();

  return (
    <HomeContainer>
      <Title mode={mode}>{title}</Title>
      <Subtitle mode={mode}>{subtitle}</Subtitle>
      <Text mode={mode}>{text}</Text>
      <ImageButton mode={mode} file={contactLink} />
    </HomeContainer>
  );
};
