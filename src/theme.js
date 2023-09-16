import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono, monospace',
    color: "white",
    h1: {
      fontFamily: 'Roboto Mono, monospace',
    },
    h2: {
      fontFamily: 'Roboto Mono, monospace',
    },

  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          width: "200px",

        }
      }
    },
    MuiPaper : {
      styleOverrides: {
        root: {
          backgroundColor: "transparent"
        }
      }
    },
      MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          color: "white",
          boxShadow: "0px 0px 3px 0px #5CB574",
          backgroundColor: 'black',
          borderRadius: '1rem'
        },
      }
    },
  }
});

export default theme;
