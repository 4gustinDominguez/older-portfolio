import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from '../../styled-components';

import { Theme } from '../../app.theme';
import { TagsHeader } from '../../common';

type ThemeStyledProviderProps = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle`
  :root{
    font-size: ${({ theme: { typography } }): string => `${typography.fontSize}`};
    letter-spacing: -0.05em;
  }

  body{
    box-sizing: border-box;
    margin: 0;
    padding: ${({ theme: { spacing } }) => spacing(2)}px;
    font-family: ${({ theme: { typography } }): string => typography.fontFamily};
    color: ${({ theme: { palette } }): string => palette.text};
    background-color: ${({ theme: { palette } }): string => palette.background};
    transition: color ${({ theme: { transition } }) => transition[1]}, background ${({ theme: { transition } }) =>
  transition[1]};
  }
`;

export const ThemeStyledProvider: React.FC<ThemeStyledProviderProps> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TagsHeader theme={theme} />
      {children}
    </ThemeProvider>
  );
};
