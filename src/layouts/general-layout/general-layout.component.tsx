import * as React from 'react';
import { Header, Content, Footer, GeneralStyled } from './general-layout.styled';

type GeneralLayoutProps = {
  HeaderChildren: React.ReactNode;
  ContentChildren: React.ReactNode;
  FooterChildren: React.ReactNode;
};

export const GeneralLayout: React.FC<GeneralLayoutProps> = ({ HeaderChildren, ContentChildren, FooterChildren }) => (
  <GeneralStyled>
    <Header>{HeaderChildren}</Header>
    <Content>{ContentChildren}</Content>
    <Footer>{FooterChildren}</Footer>
  </GeneralStyled>
);
