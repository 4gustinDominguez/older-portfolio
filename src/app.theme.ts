export const theme = {
  typography: {
    fontFamily: `"'Raleway', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    light: {
      primary: '#6772E5',
      secondary: '#000000',
      text: '#525F7F',
      highlighted: '#8898aa',
      background: '#F7F8FC',
      hoveredBackground: '#EDEFF8',
    },
    dark: {
      primary: '#00BFAA',
      secondary: '#EDEFF8',
      text: '#8898aa',
      highlighted: '#F7F8FC',
      background: '#2A303B',
      hoveredBackground: '#242A33',
    },
  },
  spacing: (factor: number): number => factor * 8,
};

export type Theme = typeof theme;
