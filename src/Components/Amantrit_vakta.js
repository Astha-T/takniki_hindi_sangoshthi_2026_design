import React from 'react';
import { Box, Typography, Grid, Button, Divider, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Speaker from '../Assets/images/Speaker.png';
import indorelogo from '../Assets/images/indorelogo.png';
import jodhpurlogo from '../Assets/images/jodhpurlogo.png';

const Amantrit_vakta = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{mx: 10}}>
            <Typography variant='h3' color="#5F695C" sx={{mt: 10, fontWeight:'bold'}}>आमंत्रित वक्ता</Typography>
{/* <Box
  sx={{
    width: "100%",
    background: "#fff",
    py: { xs: 5, md: 10 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Box sx={{ width: "80%", mb: 4 }}>
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.primary.main,
        fontWeight: "bolder",
        textAlign: "left",
        mb: 4,
      }}
    >
      संगोष्ठी का विवरण
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          भारतीय प्रौद्योगिकी संस्थान इंदौर द्वारा गत वर्ष की भांति इस वर्ष भी तकनीकी हिंदी संगोष्ठी का आयोजन 02 जनवरी
          2026 को किया जा रहा है। संगोष्ठी का मुख्य उद्देश्य वैज्ञानिक एवं प्रौद्योगिकी संस्थानों में हो रहे
          तकनीकी नवाचारों को हिंदी भाषा में सरल एवं रुचिकर पाठ्य के माध्यम से छात्रों एवं शोधार्थियों के लिए
          उपलब्ध कराया जाना है।
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          जिससे तकनीकी क्षेत्र में हिंदी भाषा के प्रयोग का दायरा विस्तृत किया जा सके। इस वर्ष की तकनीकी हिंदी
          संगोष्ठी का संयुक्त आयोजन भारतीय प्रौद्योगिकी संस्थान इंदौर और भारतीय प्रौद्योगिकी संस्थान जोधपुर द्वारा
          किया जा रहा है।
        </Typography>
      </Grid>
    </Grid>
  </Box>
</Box>
      <Box
        sx={{
          width: '100%',
          py: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            width: { xs: '80%', md: '35%' },
            backgroundColor: theme.palette.success.main,
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 4,
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
            <img src={indorelogo} alt="IIT Indore Logo" style={{ height: '144px', objectFit: 'contain' }} />

            <Typography variant="h5" color="#fff" sx={{ fontWeight: 'bold' }}>
              एवं
            </Typography>

            <img src={jodhpurlogo} alt="IIT Jodhpur Logo" style={{ height: '144px', objectFit: 'contain' }} />
          </Box>

          <Typography variant="h4" color="#fff" sx={{ fontWeight: 'bold', textAlign: 'center', mt: 2 }}>
            द्वारा संयुक्त आयोजन
          </Typography>
          <Typography variant="h6" color="#fff" sx={{ fontWeight: 'bold', textAlign: 'center', mt: 5 }}>
            2 जनवरी 2026 | स्थान - भारतीय प्रौद्योगिकी संस्थान इंदौर
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: '#fff',
          my: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button
  variant="contained"
  sx={{
    color: "#fff",
    backgroundColor: "#522B29",
    width: { xs: "60%", md: "20%" },
    height: "90px",
    fontSize: { xs: "22px", md: "28px" },
    fontWeight: "bolder",
    borderTopLeftRadius: "80px",
    borderBottomLeftRadius: "80px",
    borderTopRightRadius: "80px",
    borderBottomRightRadius: "80px",
    "&:hover": {
      backgroundColor: "#6d3c37",
    },
  }}
>
  पंजीकरण करें
</Button>

      </Box> */}

           {/* Divider Below Image Section */}
      <Divider sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }} />
</Box>
      {/* Committee Section */}
      <Box
        sx={{
          width: '100%',
          background: '#fff',
          m: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        

        <Grid
  container
  spacing={5}
  alignItems="center"
  sx={{
  }}
>
  {[...Array(2)].map((_, i) => (
    <Grid 
  item 
  xs={12} 
  sm={6} 
  key={i}
  sx={{
    display: "flex",
    gap: 10, // spacing between image and text
    flexDirection: { xs: "column", md: "row" }, // stack on small screens
  }}
>
  {/* SPEAKER IMAGE WITH OUTWARD BORDER */}
  <Box
    sx={{
      position: "relative",
      width: "23rem",
      height: "29.5rem",
      borderRadius: "12px",
      overflow: "visible", // allow borders to extend outside
      "&::before": {
        content: '""',
        position: "absolute",
        top: "-5px", // move border outward
        left: 0,
        width: "60%",
        height: "10px",
        backgroundColor: "#522B29",
        transformOrigin: "left",
        clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-5px", // move border outward
        right: 0,
        width: "60%",
        height: "10px",
        backgroundColor: "#522B29",
        transformOrigin: "right",
        clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
      },
    }}
  >
    <Box
      component="img"
      src={Speaker}
      alt="Speaker"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </Box>

  {/* SPEAKER DETAILS */}
  <Box sx={{ textAlign: "left" }}>
    <Typography
      sx={{
        fontWeight: "bold",
        color: theme.palette.primary.main,
        fontSize:'2.5rem'
      }}
    >
      श्री अनिल जोशी
    </Typography>

    <Typography
      sx={{
        mt: 3,
        lineHeight: 1.5,
        fontSize:'1.25rem'
      }}
    >
      पूर्व उपाध्यक्ष, केंद्रीय हिंदी संस्थान, भारत सरकार<br />
      एवं <br />
      अध्यक्ष, वैश्विक हिंदी परिवार<br />
      कवि - लेखक, पूर्व राजनयिक
    </Typography>
  </Box>
</Grid>

  ))}
</Grid>

      </Box>
<Divider sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }} />
      {/* <Box sx={{width:"100%", mt:5, p:3, backgroundColor:theme.palette.success.main,
          display: 'flex',
          alignItems: 'center',
      }}>
<Grid
  container
  spacing={10}
  justifyContent="center"
  alignItems="center"
  sx={{
    width: '85%',
    mx: 'auto', 
  }}
>
  <Grid item xs={12} md={6}>
      <Typography variant='h5' sx={{textAlign:'center', color:theme.palette.primary.main, fontWeight:'bold'}}>आयोजक</Typography>
  </Grid>
  </Grid>
      </Box> */}
      <Box
        sx={{
          width: '100%',
          background: '#fff',
          m: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        

        <Grid
  container
  spacing={5}
  alignItems="center"
  sx={{
  }}
>
  {[...Array(9)].map((_, i) => (
    <Grid 
  item 
  xs={4} 
  sm={4}
  key={i}
  sx={{
    display: "flex",
    gap: 7, // spacing between image and text
    flexDirection: { xs: "column", md: "row" }, // stack on small screens
  }}
>
  {/* SPEAKER IMAGE WITH OUTWARD BORDER */}
  <Box
    sx={{
      position: "relative",
      width: "14.7rem",
      height: "19rem",
      borderRadius: "12px",
      overflow: "visible", // allow borders to extend outside
      "&::before": {
        content: '""',
        position: "absolute",
        top: "-5px", // move border outward
        left: 0,
        width: "60%",
        height: "10px",
        backgroundColor: "#522B29",
        transformOrigin: "left",
        clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-5px", // move border outward
        right: 0,
        width: "60%",
        height: "10px",
        backgroundColor: "#522B29",
        transformOrigin: "right",
        clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
      },
    }}
  >
    <Box
      component="img"
      src={Speaker}
      alt="Speaker"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </Box>

  {/* SPEAKER DETAILS */}
  <Box sx={{ textAlign: "left" }}>
    <Typography
      sx={{
        fontWeight: "bold",
        color: theme.palette.primary.main,
        fontSize:'2.25rem'
      }}
    >
      श्री अनिल जोशी
    </Typography>

    <Typography
      sx={{
        mt: 10,
        lineHeight: 1.5,
        fontSize:'1.25rem'
      }}
    >
      पूर्व उपाध्यक्ष, केंद्रीय हिंदी संस्थान, भारत सरकार<br />
      एवं <br />
      अध्यक्ष, वैश्विक हिंदी परिवार<br />
      कवि - लेखक, पूर्व राजनयिक
    </Typography>
  </Box>
</Grid>

  ))}
</Grid>

      </Box>
    </ThemeProvider>
  );
};

export default Amantrit_vakta;
