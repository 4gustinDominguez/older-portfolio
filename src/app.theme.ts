export const theme = {
  typography: {
    fontFamily: `"'Montserrat', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    light: {
      addressBar: '#C5C2D5',
      font: '#36444F',
      background: '#e0e0e0',
    },
    dark: {
      addressBar: '#323133',
      font: '#C6FCED',
      background: '#030205',
    },
  },
  spacing: (factor: number): number => factor * 8,
};

export type Theme = typeof theme;
