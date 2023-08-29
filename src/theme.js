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
        input: {
          fontWeight: "bold",
          backgroundColor: 'white',
          borderRadius: '0.3rem',
          padding: '10px',
          height: "10px"
        },
      }
    },
  }
});

export default theme;
