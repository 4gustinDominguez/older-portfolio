export const theme = {
  typography: {
    fontFamily: `"'Montserrat', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    light: {
      addressBar: '#C5C2D5',
      font: '#20252D',
      background: '#EEF0F2',
    },
    dark: {
      addressBar: '#323133',
      font: '#00BFAA',
      background: '#20252D',
    },
  },
  spacing: (factor: number): number => factor * 8,
};

export type Theme = typeof theme;
