export const lightTheme = {
  typography: {
    fontFamily: `"'Raleway', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    primary: '#6772E5',
    secondary: '#000000',
    text: '#525F7F',
    navigationBackground: '#EDEFF8',
    background: '#F7F8FC',
  },
  spacing: (factor: number): number => factor * 8,
  transition: ['0.2s ease-out', '0.5s ease-out'],
  breakpoints: {
    mobile: {
      minWidth: '(min-width: 540px)',
      maxWidth: '(max-width: 540px)',
    },
    tablet: {
      minWidth: '(min-width: 768px)',
      maxWidth: '(max-width: 768px)',
    },
  },
};

export const darkTheme = {
  typography: {
    fontFamily: `"'Raleway', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    primary: '#00BFAA',
    secondary: '#EDEFF8',
    text: '#8898aa',
    navigationBackground: '#242A33',
    background: '#2A303B',
  },
  spacing: (factor: number): number => factor * 8,
  transition: ['0.2s ease-out', '0.5s ease-out'],
  breakpoints: {
    mobile: {
      minWidth: '(min-width: 540px)',
      maxWidth: '(max-width: 540px)',
    },
    tablet: {
      minWidth: '(min-width: 768px)',
      maxWidth: '(max-width: 768px)',
    },
  },
};

export type Theme = typeof lightTheme;
