export const theme = {
  typography: {
    fontFamily: `"'Raleway', sans-serif"`,
    fontSize: 16,
  },
  palette: {
    light: {
      primary: '',
      secondary: '',
      text: '',
      highlighted: '',
      background: '',
      hoveredBackground: '',
    },
    dark: {
      primary: '',
      secondary: '',
      text: '',
      highlighted: '',
      background: '',
      hoveredBackground: '',
    },
  },
  spacing: (factor: number): number => factor * 8,
};

export type Theme = typeof theme;

/*

  light: {
        dominantColor: '#0F1E26',
        primaryAccent: '#5589fe',
        secondaryAccent: '#A1BDFF',
        addressBar: '#EDEFF8',
        highlighted: '#5589fe',
        background: '#F7F8FC',
        font: '#0F1E26',
      },
  dark: {
    dominantColor: '#353459',
    primaryAccent: '#53518C',
    secondaryAccent: '#C0BFD9',

    addressBar: '#242A33',
    font: '#00BFAA',
    highlighted: '#FFFFFF',
    background: '#2A303B',
  },

*/
