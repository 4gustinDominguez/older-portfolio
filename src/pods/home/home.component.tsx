import * as React from 'react';
import { Mode } from '../../app.model';
import { HomeContainer } from './home.styled';
import { Title, Subtitle, Text, HighlightedText } from '../../common/styled-fonts';

type HomeProps = {
  mode: Mode;
};

export const Home: React.FC<HomeProps> = ({ mode }) => {
  const title = 'Fran Galiana';
  const subtitle = 'I build efficient and high quality websites';
  const text = `I'm a Frontend Engineer based in Alicante, Spain. Contact me at `;
  const hightlightedText = `fjgalianacano@gmail.com`;

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
