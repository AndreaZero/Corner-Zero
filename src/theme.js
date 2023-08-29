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
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent"
        }
      }      
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: "200px",
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
          backgroundColor: 'white',
          borderRadius: '0.3rem',
        },
      }
    },
  }
});

export default theme;
