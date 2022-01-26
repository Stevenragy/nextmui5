import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'IslandMoments, cursive',
    h4: { fontFamily: 'IslandMoments' },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      // "@global":{
      //   "@font-face":[
      //     {

      //     }
      //   ]
      // }
      styleOverrides: `
      @font-face {
        font-family: 'IslandMoments';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('IslandMoments'), local('IslandMoments'), url("fonts/BarlowCondensed-Italic.woff2") format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      `,
    },
  },
});

export default theme;
