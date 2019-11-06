import * as React from 'react';
import { Mode } from '../../app.model';
import { HomeContainer } from './home.styled';
import { Title, Subtitle, Text, HighlightedText } from '../../common/styled-fonts';
import { createIntroduction } from './home.business';

type HomeProps = {
  mode: Mode;
};

export const Home: React.FC<HomeProps> = ({ mode }) => {
  const { title, subtitle, text, hightlightedText } = createIntroduction();

  return (
    <HomeContainer>
      <Title mode={mode}>{title}</Title>
      <Subtitle mode={mode}>{subtitle}</Subtitle>
      <Text mode={mode}>
        <>
          {text}
          <HighlightedText mode={mode}>{hightlightedText}</HighlightedText>
        </>
      </Text>
    </HomeContainer>
  );
};
