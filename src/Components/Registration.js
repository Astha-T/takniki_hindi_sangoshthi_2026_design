import React from 'react';
import { Box, Typography, Grid, Button, Divider, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Registration = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{mx: {xs: 1, md:10}}}>
            <Typography variant='h3' color="#5F695C" sx={{mt: 10, fontWeight:'bold'}}>पंजीकरण</Typography>


           {/* Divider Below Image Section */}
      <Divider sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }} />
</Box>
<Box sx={{ backgroundColor: "#5F695C", mt: 5, pb: 3 }}>
  <Typography
    variant="h5"
    sx={{ color: "#fff", textAlign: "center", pt: 3, pb: 3 }}
  >
    प्रत्येक सत्र के अंतर्गत प्रतिभागियों को कुल पाँच पुरस्कार
  </Typography>

  {[
    { title: ( <Typography variant="h5" sx={{ fontWeight: "bolder" }}>प्रथम पुरस्कार</Typography>), prize: "5000 रुपए" },
    { title: ( <Typography variant="h5" sx={{ fontWeight: "bolder" }}>द्वितीय पुरस्कार</Typography>), prize: "3500 रुपए" },
    { title: ( <Typography variant="h5" sx={{ fontWeight: "bolder" }}>तृतीय  पुरस्कार</Typography>), prize: "2000 रुपए" },
    {
      title: (
        <Typography variant='h5' sx={{ fontWeight: "bolder" }}>
          प्रोत्साहन पुरस्कार <br /> (प्रति सत्र 2)
        </Typography>
      ),
      prize: "1000 रुपए",
    },
  ].map((item, i) => (
    <Box
  key={i}
  sx={{
    width: "100%",
    my: 2,
    display: "flex", // ✅ keep flex
    flexDirection: { xs: "column", md: "row" }, // stack on small screens
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }}
>

      {/* Creme Box */}
      <Box
        sx={{
          backgroundColor: "#F9DAD0",
          width: "22rem",
          py: 2,
          textAlign: "center",
          fontWeight: "bolder",
          borderRadius: "80px",
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
      >
        {item.title}
      </Box>

      {/* Brown Box (slightly overlapping) */}
      <Box
        sx={{
          backgroundColor: "#522B29",
          width: "14rem",
          py: 2,
          fontSize: "36px",
          color: "#fff",
          textAlign: "center",
          fontWeight: "bolder",
          borderRadius: "80px",
          position: "relative",
          left: "-3%", // overlap amount
          zIndex: 2,
        }}
      >
        {item.prize}
      </Box>
    </Box>
  ))}
</Box>
 <Box sx={{mx: {xs: 1, md:10}}}>
       < Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bolder",
                textAlign: "left",
                my: 4,
              }}
            >
              मुख्य बिंदु
            </Typography>
            <Divider sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }} />
            < Typography
              variant="body2"
              sx={{
                textAlign: "left",
                my: 4,
                lineHeight:1.25
              }}
            >तकनीकी हिन्दी संगोष्ठी 2024 से संबंधित मुख्य तिथियां-
<ul>
    <li>आलेख अपलोड करने की समय सीमा - 31 अक्टूबर 2024    10 नवंबर 2024 तक (संशोधित दिनांक)</li>
    <li>प्रतिभागियों को आलेख चयन संबंधित सूचना - 07 नवंबर 2024 (संशोधित तिथि के पश्चात प्राप्त आलेखों का 15 नवंबर 2024 तक)</li>
    <li>चयनित आलेखों के लिए पंजीकरण शुल्क जमा करने की अंतिम तिथि -  15 नवंबर 2024</li></ul>

</Typography>
    </Box>

    <Box sx={{display:'flex', justifyContent:'center', alignContent:'center', my: 7}}>
<Box sx={{backgroundColor:"#8DAA91", width:'90%', borderRadius:'30px'}}>
<Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant='h5' sx={{color:'white', lineHeight:'1.75', px: 5, py: 2}}> संगोष्ठी में भाग लेने के इच्छुक प्रतिभागी कृपया निम्नदर्शित पंजीकरण फ़ॉर्म के <br/>माध्यम से आलेख अपलोड की समय सीमा के अंतर्गत अपना आलेख भेजें </Typography>
</Grid>
<Grid item xs={12} md={6}>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      my: { xs: 3, md: 5 },
      mx: { xs: 0, md: 25 },
    }}
  >
    <Button
      variant="contained"
      endIcon={
        <ArrowForwardIcon
  sx={{
    width: { xs: 24, sm: 32, md: 40 },
    height: { xs: 24, sm: 32, md: 40 },
    borderRadius: '50%',
    color: 'white',
    ml: 1.5,
    background: '#522B29',
    p: 1,
  }}
/>

      }
      sx={{
        color: '#522B29',
        backgroundColor: '#F9DAD0',
        width: { xs: '80%', sm: '60%', md: '22.5rem' },
        height: { xs: '3rem', md: '3.125rem' },
        fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
        fontWeight: 'bolder',
        borderRadius: '80px',
        p: { xs: 2, sm: 3, md: 4 },
        textAlign: 'center',
        '&:hover': {
          backgroundColor: '#f0c5b8',
        },
      }}
    >
      पंजीकरण फ़ॉर्म
    </Button>
  </Box>
</Grid>


</Grid>
 
</Box>
</Box>
<Box sx={{mx: {xs: 1, md:10}, pb: 3}}>
       < Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bolder",
                textAlign: "left",
                my: 4,
              }}
            >
              संगोष्ठी पंजीकरण शुल्क
            </Typography>
            <Divider sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }} />
            < Typography
              sx={{
                textAlign: "left",
                my: 4,
                lineHeight:1.25,
                fontSize:'1.5rem'
              }}
            >छात्र / प्रशिक्षु - <b>रू. 250</b><br/>
संस्थानों के स्टाफ सदस्य - <b>रू. 500</b><br/>
संकाय सदस्य / वैज्ञानिक / अभियंता - <b>रू. 1000</b><br/>

</Typography>
    </Box>

<Box sx={{mx: {xs: 1, md:10}}}>
       < Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bolder",
                textAlign: "left",
                my: 4,
              }}
            >
              चयनित आलेखों के प्रतिभागियों हेतु दिशानिर्देश
            </Typography>
            <Divider sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }} />
            < Typography
              sx={{
                textAlign: "left",
                my: 4,
                fontWeight:'bold',
                py:2,
                fontSize:'1.5rem'
              }}
            >I.   भारतीय प्रौद्योगिकी संस्थान के छात्रों और कार्मिकों के चयनित आलेखों के लिए

</Typography>
< Typography
              sx={{
                textAlign: "left",
                my: 4,
                width:'86%',
                lineHeight:1.25,
                fontSize:'1.5rem'
              }}
            ><ol>
                <li>यदि आपका आलेख अंतरिम के रूप में चुन लिया गया है, जिसकी सूचना आपको ईमेल द्वारा प्रदान कर दी गई है तो आपसे अनुरोध है कि आप  लिंक https:// . form.qfixonline.com/iitjths से पंजीकरण शुल्क का भुगतान करें ।</li>
<li>प्रतिभागियों के लिए संगोष्ठी के दिन जलपान, दोपहर भोजन, रात्रि भोजन की व्यवस्था संगोष्ठी आयोजन समिति द्वारा की जायेगी ।</li>
<li>प्रतिभागी को संगोष्ठी में अपना प्रस्तुतिकरण पीपीटी द्वारा देना होगा, अत: आपसे निवेदन है कि इमेल द्वारा प्रजेंटेशन भिजवा दें अथवा साथ लेकर आने का कष्ट करें ।</li>
            </ol>

</Typography>
 <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                my: 4,
                fontWeight:'bold',
                py:2
              }}
            >II.   अन्य संस्थानों के छात्रों एवं कार्मिकों के चयनित आलेखों के लिए

</Typography>
< Typography
              sx={{
                textAlign: "left",
                my: 4,
                width:'85%',
                lineHeight:1.25,
                fontSize:'1.5rem'
              }}
            ><ol>
                <li>प्रतिभागियों को अपने आवागमन हेतु रेल/बस/हवाई जहाज के किराये की व्यवस्था स्वयं करनी होगी । संस्थान एवं आयोजन समिति द्वारा संस्थान से कोई प्रतिपूर्ति नहीं दी जाएगी । स्टेशन एवं हवाई अड्डे से संस्थान परिसर तक प्रतिभागी को स्वयं भुगतान करके टैक्सी या रिक्शा से आवागमन करना होगा ।</li>
<li>यदि आपका आलेख अंतरिम के रूप में चुन लिया गया है, जिसकी सूचना आपको ईमेल द्वारा प्रदान कर दी गई है तो आपसे अनुरोध है कि आप  लिंकhttps://form.qfixonline.com/iitjths  से पंजीकरण शुल्क का भुगतान करें ।</li>
<li>आवास व्यवस्था - संस्थान द्वारा प्रतिभागियों के लिए संगोष्ठी आयोजन तिथि की रात्रि में ठहरने की व्यवस्था संस्थान के छात्रावास में साझाकरण आवास (sharing basis) के आधार पर की जायेगी।</li>
<li>प्रतिभागियों के लिए संगोष्ठी के दिन जलपान, दोपहर भोजन, रात्रि भोजन की व्यवस्था संगोष्ठी आयोजन समिति द्वारा की जायेगी । </li>
<li>प्रतिभागी को संगोष्ठी में अपना प्रस्तुतिकरण पीपीटी द्वारा देना होगा, अत: आपसे निवेदन है कि इमेल द्वारा प्रजेंटेशन भिजवा दें अथवा साथ लेकर आने का कष्ट करें ।</li>
<li>आपके आवागमन संबंधित विवरण की जानकारी संलग्न गूगल फॉर्म द्वारा भिजवाने का कष्ट करें –https://forms.gle/ZZudBgxxh1ChnTrKA </li>
<li>यदि कोई प्रतिभागी इसके आतिरिक्त अन्य दिवस पर आवास सुविधा चाहता है तो कक्ष की उपलब्धता के आधार पर कमरा बुक किया जायेगा जिसका भोजन सहित शुल्क प्रतिभागी द्वारा देय होगा ।</li>
<li>
  प्रतिभागी निम्नलिखित खाते में भुगतान कर सकता है:
  <Box sx={{ display: "flex", flexDirection: "column", mt: 1, ml: 2 }}>
    <Typography sx={{fontSize:'1.5rem', lineHeight:1.25}}><b>खाता संख्या -</b> 38448045180</Typography>
    <Typography sx={{fontSize:'1.5rem', lineHeight:1.25}}><b>नाम -</b> IIT Jodhpur Hostel Receipts and Fine Accounts</Typography>
    <Typography sx={{fontSize:'1.5rem', lineHeight:1.25}}><b>बैंक -</b> SBI IIT Jodhpur</Typography>
    <Typography sx={{fontSize:'1.5rem', lineHeight:1.25}}><b>IFSC Code -</b> SBIN0014892</Typography>
    <Typography sx={{fontSize:'1.5rem', lineHeight:1.25}}><b>UPI ID -</b> 38448045180@sbi</Typography>
  </Box>
</li>

            </ol>

</Typography>
    </Box>


    </ThemeProvider>
  );
};

export default Registration;
