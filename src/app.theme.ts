export const lightTheme = {
  typography: {
    fontFamily: `"'Inter', sans-serif"`,
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
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },
};

export const darkTheme = {
  typography: {
    fontFamily: `"'Inter', sans-serif"`,
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
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },
};

export type Theme = typeof lightTheme;
