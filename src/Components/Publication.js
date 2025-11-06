import React from 'react';
import { Box, Typography, Grid, Button, Divider, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import table from '../Assets/images/table.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Publication = () => {
        const theme = useTheme();
  const buttonTitles = [
    'राजभाषा नियम',
    '1976 राजभाषा अधिनियम',
    '1963 सरल प्रशासकीय शब्दावली',
    'वार्षिक कार्यक्रम 2023-2024',
  ];

  return (

    <ThemeProvider theme={theme}>
      <Box>
        {/* Header Section */}
        <Box sx={{ mx: {xs: 1, md:10} }}>
          <Typography variant="h3" color="#5F695C" sx={{ mt: 10, fontWeight: 'bold' }}>
            हिंदी प्रकोष्ठ
          </Typography>

          <Divider
            sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }}
          />
        </Box>

        {/* Table Section */}
        <Box sx={{ mx: {xs: 1, md:10}, my: 5 }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bolder',
              textAlign: 'left',
              mb: 2,
            }}
          >
            राजभाषा कार्यान्वयन समिति
          </Typography>

          <img src={table} alt="table" style={{ paddingLeft: 3, paddingTop: 3 }} />
        </Box>

        {/* Rules Section */}
        <Box sx={{ mx: {xs: 1, md:10}, my: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bolder',
              textAlign: 'left',
              mb: 4,
              textDecoration:'underline'
            }}
          >
            राजभाषा नियमावली एवं शब्दावलियाँ
          </Typography>
        </Box>

        {/* Button Grid Section */}
<Box sx={{ backgroundColor: '#F9DAD0', py: 4, display: 'flex', justifyContent: 'space-around' }}>
  <Grid container spacing={12}>
    {buttonTitles.map((title, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Button
            variant="contained"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  borderRadius: '50%',
                  color: '#522B29',
                  backgroundColor: '#fff', // ✅ More contrast
                  p: 1,
                  ml: 1.5,
                  fontSize: '2rem', // ✅ Bigger icon
                  height: '2.8rem',
                  width: '2.8rem',
                }}
              />
            }
            sx={{
              color: '#fff', // ✅ text color matches background contrast
              backgroundColor: '#522B29',
              fontSize: '1.75rem',
              fontWeight: 'bold',
              borderRadius: '80px',
              px: 4,
              py: 2,
              mt: 1,
              textAlign: 'center',
              '&:hover': {
                backgroundColor: '#3b1c1b',
              },
            }}
          >
            {title}
          </Button>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>


        {/* Word Collection Section */}
        <Box sx={{ mx: {xs: 1, md:10}, mt: 7, my: 10 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bolder',
              textAlign: 'left',
              mb: 4,
              lineHeight: 2,
            }}
          >
            वृहत पारिभाषिक शब्द संग्रह - अभियांत्रिकी (Engineering) - खंड XIV (A-E)
            <br />
            वृहत पारिभाषिक शब्द संग्रह - अभियांत्रिकी (Engineering) - खंड XV (F-Q)
            <br />
            वृहत पारिभाषिक शब्द संग्रह - अभियांत्रिकी (Engineering) - खंड XIV (R-Z)
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Publication;
