import * as React from 'react';

import { HomeContainer } from './home.styled';
import { Title, Subtitle, Text } from '../../common/styled-fonts';
import { createIntroduction, createContactLink } from './home.business';
import { ImageButton } from '../../common';
import { useTranslatedKeys } from '../../providers';
import { tkeys } from '../../core/translation';
import { Emoji } from '../../assets/icons/utils';

type HomeProps = {};

export const Home: React.FC<HomeProps> = props => {
  const [tdkIntroduction] = useTranslatedKeys(tkeys.home.introduction);
  const { title, subtitle, text } = createIntroduction(tdkIntroduction);
  const contactLink = createContactLink(tdkIntroduction);

  return (
    <HomeContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Text format={'normal'} lineSpacing={true}>
        {text}
        <Emoji symbol="🌴" label="palmtree" />
        <Emoji symbol="🌞" label="sun" />
      </Text>
      <ImageButton iconLink={contactLink} iconSize={3} />
    </HomeContainer>
  );
};
