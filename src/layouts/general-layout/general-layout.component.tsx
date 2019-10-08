import * as React from 'react';
import { HeaderStyled, ContentStyled, FooterStyled, GeneralStyled } from './general-layout.styled';

type GeneralLayoutProps = {
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
};

export const GeneralLayout: React.FC<GeneralLayoutProps> = ({ Header, Content, Footer }) => (
  <GeneralStyled>
    <HeaderStyled>{Header}</HeaderStyled>
    <ContentStyled>{Content}</ContentStyled>
    <FooterStyled>{Footer}</FooterStyled>
  </GeneralStyled>
);
