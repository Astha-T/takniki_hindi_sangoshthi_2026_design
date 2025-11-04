import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import indorelogo_white from '../Assets/images/indorelogo_white.png';

const theme = createTheme({
  palette: {
    primary: { main: '#1C5B9D' },
    secondary: { main: '#f9a825' },
    success: { main: '#8DAA91' },
  },
  typography: { fontFamily: 'Hind' },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' }, // ✅ block on mobile, flex on desktop
          alignItems: { md: 'center' },
          justifyContent: { md: 'space-between' },
          textAlign: { xs: 'center', md: 'left' },
          width: '100%',
          background: theme.palette.primary.main,
          py: { xs: 5, md: 7 },
          px: { xs: 4, md: 15 },
          boxSizing: 'border-box',
        }}
      >
        {/* Left Section: Logo */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            mb: { xs: 3, md: 0 }, // spacing between logo and text on mobile
          }}
        >
          <img
            src={indorelogo_white}
            alt="IIT Indore Logo"
            style={{
              height: '120px',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Right Section: Address */}
        <Box>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              lineHeight: 1.3,
            }}
          >
            Indian Institute of Technology Indore<br />
            Simrol, Khandwa Road, Indore, Madhya Pradesh<br />
            India - 453552
          </Typography>

          <Typography
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              lineHeight: 1.3,
              fontSize: '1.25rem',
              mt: 3,
            }}
          >
            भारतीय प्रौद्योगिकी संस्थान इंदौर <br />
            सिमरोल, खंडवा रोड, इंदौर, मध्य प्रदेश, भारत - 453552
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
