// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1C5B9D' },
    secondary: { main: '#f9a825' },
    success: { main: '#8DAA91' },
    background: { default: '#ffffff' },
    text: { main: '#000' },
  },
  typography: {
    fontFamily: 'Hind, Arial, sans-serif',
    h3: { fontSize: '4rem', fontWeight: 'bold' },
    h5: { fontSize: '2rem', fontWeight: 600 },
    h6: {fontSize :'1.375rem'},
    body1: { fontSize: '1.125rem', lineHeight: 1.8 },
    body2: { fontSize: '24px'},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
