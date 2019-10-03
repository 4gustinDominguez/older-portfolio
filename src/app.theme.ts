export const theme = {
  typography: {
    fontFamily: `"'Montserrat', sans-serif"`,
    fontSize: 14,
  },
  palette: {
    light: {
      font: '#030205',
      background: '#e0e0e0',
    },
    dark: {
      font: '#e0e0e0',
      background: '#030205',
    },
  },
  spacing: (factor: number): number => factor * 8,
};

export type Theme = typeof theme;
