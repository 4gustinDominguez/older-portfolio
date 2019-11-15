export const lightTheme = {
  typography: {
    fontFamily: `"'Raleway', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    primary: '#6772E5',
    secondary: '#000000',
    text: '#525F7F',
    highlighted: '#8898aa',
    background: '#F7F8FC',
    hoveredBackground: '#EDEFF8',
    hoveredLink: '#A2A9EF',
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
    highlighted: '#F7F8FC',
    background: '#2A303B',
    hoveredBackground: '#242A33',
    hoveredLink: '#00FEE3',
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
