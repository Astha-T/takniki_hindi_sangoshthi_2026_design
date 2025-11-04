import React from 'react';
import { Box, Typography, Grid, Button, Divider, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Invitation = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      {/* ✅ All content wrapped in one parent Box */}
      <Box>

        {/* Header Section */}
        <Box sx={{ mx: 10 }}>
          <Typography variant="h3" color="#5F695C" sx={{ mt: 10, fontWeight: 'bold' }}>
            आलेख आमंत्रण
          </Typography>

          {/* Divider Below Header */}
          <Divider
            sx={{ my: 2, borderColor: '#F9DAD0', borderWidth: 2, width: '100%', mx: 'auto' }}
          />
        </Box>

        {/* Upload Button Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            my: 3,
            mx: 25,
          }}
        >
          <Button
            variant="contained"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  borderRadius: '50%',
                  color: 'white',
                  p: 1,
                  ml: 2,
                  height:"2.8rem",
                  width:"2.8rem",
                  background: '#522B29',
                }}
              />
            }
            sx={{
              color: '#522B29',
              backgroundColor: '#F9DAD0',
               width: "37rem",
            height:"7rem",
              fontSize: '2.75rem',
              fontWeight: 'bolder',
              borderRadius: '80px',
              px: 5,
              py: 2,
              mt: 3,
              textAlign: 'center',
            }}
          >
            आलेख अपलोड लिंक
          </Button>
        </Box>

        {/* Divider */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Divider sx={{ my: 3, borderColor: '#F9DAD0', borderWidth: 2, width: '90%', mx: 'auto' }} />
        </Box>

        {/* Section 1 */}
        <Box sx={{ mx: 10 }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bolder',
              textAlign: 'left',
              my: 4,
            }}
          >
            आलेख प्रस्तुतिकरण के समय ध्यान रखने योग्य बातें :
          </Typography>

          <Typography
            sx={{ textAlign: 'left', my: 4, lineHeight: 1.5, fontSize:'1.5rem' }}
          >
            तकनीकी हिन्दी संगोष्ठी 2024 से संबंधित मुख्य तिथियां-
            <ol>
              <li>सबमिशन फॉर्म दो पेज का है। प्रथम पृष्ठ में लेखकों का विवरण दिया गया है तथा दूसरे पृष्ठ में प्रस्तुत लेखों का विवरण एकत्रित किया जायेगा।</li>
              <li>यदि आप केवल एक लेख सबमिट कर रहे हैं, तो कृपया दोनों अनुभागों को पूरा करें, और अपना लेख अपलोड करें।</li>
              <li>आप एक से अधिक लेख प्रस्तुत कर रहे हैं, संगोष्ठी की ईमेल पर सूचित करके भिजवा सकते हैं ।</li>
            </ol>
          </Typography>
        </Box>

        {/* Section 2 */}
        <Box sx={{ mx: 10, pb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bolder',
              textAlign: 'left',
              my: 4,
            }}
          >
            आलेख लिखते समय ध्यान रखने योग्य बातें :
          </Typography>

          <Typography
            sx={{ textAlign: 'left', mt: 4, lineHeight: 2, fontSize:"1.5rem",  width:'85%' }}
          >
            <ol>
              <li>यूनिकोड फोंटः मंगल / Mangal, single line spacing, मार्जिन / margin 1" (2.54 सेमी/ cm) प्रत्येक तरफ / all side, पेज A4 size</li>
              <li>हेडिंग फोंट साइज: 14 बोल्ड एवं अंडरलाइन</li>
              <li>सब हेडिंग फोंट साइज: 12 बोल्ड (पाठक की सुगमता के लिए लेख में सार, प्रस्तावना, विषय के उप शीर्षक, शब्द संकेत, संदर्भ सूची, आदि का उपयोग करें। लेखक परिचय में लेखक के फोटो का उपयोग भी किया जा सकता है, कलर हल्का नीला रखें।)</li>
              <li>शेष सामान्य लेख के लिए फोंट साइजः 10 रहेगा और कलर ब्लेक रखें।</li>
              <li>कृपया किसी लेख में पेज नंबर का उपयोग न करें।</li>
              <li>लेख पीडीएफ और .docx दोनों फाइल में अपलोड करें।</li>
              <li>तकनीकी आलेख 2 से 4 पेज (संदर्भ सूची के अत्तिरिक्त) तथा राजभाषा सत्र का आलेख 5 से 7 पृष्ठ सीमा के अंतर्गत होना चाहिए।</li>
              <li>आलेख सरल हो जिसे छात्र एवं आमजन आसानी से समझ सके ।</li>
              <li>आलेख की स्वीकृती के संदर्भ में मूल्यांकन समिति द्वारा लिया निर्णय ही अंतिम माना जायेगा ।</li>
              <li>आलेख के साथ मौलिकता प्रमाण पत्र देना अनिवार्य होगा।</li>
              <li>प्रतिभागी अपने संस्थान / विश्वविद्यालय / केंद्र के हिंदी कार्यालय की सहायता से त्रुटियों को हटाकर ही आलेख भिजवाने का कष्ट करें ।</li>
              <li>आलेख में प्रयोग किए गए सभी चित्रों को भी अलग से अपलोड किया जाना अनिवार्य है।</li>
              <li>आलेख के साथ मुख्य लेखक को एक फोटोग्राफ और हिंदी में लगभग 50 शब्दों का एक संक्षिप्त परिचय प्रस्तुत करना होगा।</li>
              <li>आलेख समिति द्वारा संबंधित अन्य दिशा निर्देश आयोजन समिति के अध्यक्ष से विचार विमर्श करके दिये जा सकते है।</li>
            </ol>
          </Typography>
        </Box>
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Divider sx={{ my: 3, borderColor: '#F9DAD0', borderWidth: 2, width: '90%', mx: 'auto' }} />
        </Box>
        <Box sx={{ mx: 10 }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bolder',
              textAlign: 'left',
              my: 3,
            }}
          >
            तकनीकी हिन्दी संगोष्ठी 2026 में निम्नलिखित शीर्षक तथा विषयों के अंतर्गत आलेख आमंत्रित हैं :
          </Typography>
          <Box sx={{backgroundColor:"#8DAA91", borderRadius:'30px'}}>
            <Typography
            sx={{
              color: '#fff',
              textAlign: 'center',
              py: 2,
              fontSize:"2.5rem"
            }}
          >आलेख संग्रह का मुख्य शीर्षक</Typography>
            <Typography
            variant="h5"
            sx={{
              color: '#fff',
              fontWeight: 'bolder',
              textAlign: 'center',
              pb: 4,
              fontSize:"3rem"
            }}
          >" विकसित भारत की दिशा में विज्ञान और प्रौद्योगिकी का योगदान " </Typography>
          </Box>
          <Box sx={{ my: 4}}>
            <Typography  sx={{fontWeight:'bolder', lineHeight:2, fontSize:"1.5rem"}}>
                प्रतिभागी अपने लेख वैज्ञानिक और तकनीकी विषय क्षेत्रों में से किसी एक के अंतर्गत भेज सकते हैं।<br/>
विषय क्षेत्रों के साथ कुछ उदाहरण भी दिए गए हैं जहाँ लेख प्रस्तुत किए जा सकते हैं। <br/>
पिछले वर्ष सेमिनार के कुछ तकनीकी और लोकप्रिय विज्ञान आलेख आपके संदर्भ के लिए वेब पेज में नीचे दिखाए गए हैं - 
            </Typography>

          <Typography sx={{lineHeight:2, mt: 2, fontSize:"1.5rem"}}></Typography>  
          <ol style={{fontSize:"1.5rem"}}>
                     <li>अंतरिक्ष विज्ञान एवं प्रौद्योगिकी - उदाहरणत: तरल प्रणोदन इंजन ( Liquid Propulsion Engine Technology) etc.</li>
<li>रोबोटिक्स एवं गतिशीलता प्रणाली - उदाहरणत: Dynamic Control, UAV Flight etc.</li>
<li>क्वांटम प्रौद्योगिकी - उदाहरणत: Quantum Key Distribution, Quantum information etc.</li>
<li>संचार तकनीकें - उदाहरणत: 5G, LTE , WIMAX etc.</li>
<li>आर्टिफिशियल इंटेलिजेंस एवं मशीन लर्निंग - उदाहरणत: Deep Learning, Natural Language Processing etc.</li>
<li>चिकित्सा प्रौद्योगिकी एवं स्मार्ट स्वास्थ्य सेवा - उदाहरणत: Laser Therapy, Genomics etc.</li>
<li>पर्यावरण, स्मार्ट शहर एवं परिवहन - उदाहरणत: Bio Fuel, EV, Network of Vehicle etc.</li>
<li>सतत विकास लक्ष्य (SDGs) और समाज:  उदाहरणत: Sustainability and Social Equity; Indigenous Knowledge and Sustainable Practices etc.</li>
<li>साइबर स्पेस में सुरक्षा, गोपनीयता एवं नीति - उदाहरणत: Cryptography, Security protocols etc.</li>
<li>अर्धचालक (सेमीकंडक्टर) इलेक्ट्रॉनिक्स: डिजाइन, विनिर्माण एवं एकीकरण - उदाहरणत: Device Characterization, VLSI and Nanotechnology etc.</li>
<li>इंटरनेट ऑफ थिंग्स एवं अनुप्रयोग - उदाहरणत: Applications in different Industries:- Agriculture, Textile, Footwear etc.</li>
<li>नवीकरणीय ऊर्जा एवं हरित ऊर्जा - उदाहरणत: Solar Cells Technology, Fabrication etc.</li>
<li>रक्षा क्षेत्र में प्रौद्योगिकी विकास - उदाहरणत: Missile System etc.</li>
<li>गणित एवं प्रौद्योगिकी - उदाहरणत: AI and ML Algorithms, Solving Partial Differential Equations etc.</li>
<li>न्याय एवं कानून व्य   वस्था में प्रौद्योगिकी का भविष्य- उदाहरणत: Forensic, Digital records etc.</li>
<li>शैक्षणिक सत्र</li>
            </ol>

<ul style={{fontSize:"1.5rem"}}>
    <li>उपरोक्त सभी विषयगत क्षेत्रों पर प्रचलित / लोकप्रिय विज्ञान आलेख  </li>
    <ol>
        <li>राजभाषा सत्र - </li>
    </ol>
    <li>राष्ट्रीय शिक्षा नीति के क्रियान्वयन के लिए भारतीय भाषाओं में शिक्षण संबंधित चुनौतियां एवं समाधान</li>
    </ul>


          </Box>
      
</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Divider sx={{ my: 3, borderColor: '#F9DAD0', borderWidth: 2, width: '90%', mx: 'auto' }} />
        </Box>
         <Box sx={{ mx:10, display:'flex', justifyContent:'center', my: 3}}>
        <Grid container spacing={5}>
            <Grid item xs={12} md={6} >
                <Box sx={{ backgroundColor:"#8DAA91", borderRadius:'30px' , p:3 }}>
                    <Typography variant='h5' sx={{fontWeight:'bolder', color:'#fff', justifyContent:'center'}}>
 आपके संदर्भ हेतु गत वर्ष के <br/>कुछ प्रचलित / लोकप्रिय विज्ञान <br/>के आलेख संलग्न हैं
                    </Typography>
                    <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            alignContent: 'center',

          }}
        >
          <Button
            variant="contained"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  borderRadius: '50%',
                  color: '#522B29',
                  p: 1,
                  ml: 2,
                  background: '#F9DAD0',
                }}
              />
            }
            sx={{
              color: '#F9DAD0',
              backgroundColor: '#522B29',
              height: '3.125rem',
              width:"8.5rem",
              fontSize: '1.5rem',
              fontWeight: 'bolder',
              borderRadius: '80px',
              px: 5,
              py: 3,
              mt: 3,
              textAlign: 'center',
            }}
          >
            देखें 
          </Button>
        </Box>
                   
                </Box>
        </Grid>
           <Grid item xs={12} md={6} >
                <Box sx={{ backgroundColor:"#8DAA91", borderRadius:'30px' , p:3 }}>
                    <Typography variant='h5' sx={{fontWeight:'bolder', color:'#fff', justifyContent:'center'}}>
 आपके संदर्भ हेतु गत वर्ष के कुछ <br/>तकनीकी आलेख संलग्न हैं
                    </Typography>
                    <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            alignContent: 'center',

          }}
        >
          <Button
            variant="contained"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  borderRadius: '50%',
                  color: '#522B29',
                  p: 1,
                  ml: 2,
                  background: '#F9DAD0',
                }}
              />
            }
            sx={{
              color: '#F9DAD0',
              backgroundColor: '#522B29',
              height: '3.125rem',
              width:"8.5rem",
              fontSize: '1.5rem',
              fontWeight: 'bolder',
              borderRadius: '80px',
              px: 5,
              py: 3,
              mt: 8,
              textAlign: 'center',
            }}
          >
            देखें 
          </Button>
        </Box>
                   
                </Box>
        </Grid>
        </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Divider sx={{ my: 3, borderColor: '#F9DAD0', borderWidth: 2, width: '90%', mx: 'auto' }} />
        </Box>
{/* Row with left text and right-aligned stacked buttons */}
<Box sx={{ mx: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
  {/* Left text */}
  <Typography sx={{ fontWeight: 'bolder', textAlign: 'left', fontSize:"2.25rem" }}>
    आलेख रचयिताओं से अनुरोध है कि वे अपने आलेख दिए गए प्रारूप <br />में ही जमा करें :
  </Typography>

  {/* Right-aligned vertical buttons */}
 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
  {["आलेख प्रारूप", "आलेख प्रमाण पत्र"].map((label, i) => (
    <Button
      key={i}
      variant="contained"
      sx={{
        color: "#fff",
        backgroundColor: "#522B29",
        height: "5.5rem",
        width: "28rem",
        fontSize: "2rem",
        borderRadius: "80px",
        px: 5,
        py: 2,
        display: "flex",
        justifyContent: "space-between", // ✅ keeps text left & icon right
        alignItems: "center", // ✅ vertically center both
        textTransform: "none", // keep Hindi text natural
      }}
    >
      <Box sx={{ flexGrow: 1, textAlign: "left" }}>{label}</Box>

      <ArrowForwardIcon
        sx={{
          borderRadius: "50%",
          color: "#522B29",
          p: 1,
          height: "2.875rem",
          width: "2.875rem",
          background: "#F9DAD0",
        }}
      />
    </Button>
  ))}
</Box>

</Box>

<Box sx={{ mx: 10, background: '#F9DAD0', mt: 5, pb: 3, mb: 0 }}>
  <Box sx={{ pt: 3, px: 15 }}>
    <Typography  sx={{ fontWeight: 'bolder' , fontSize:"2rem", pt: 2}}>नोट</Typography>
    <Divider
            sx={{ my: 2, borderColor: '#fff', borderWidth: 2, width: '100%', mx: 'auto' }}
          />
    <Typography  sx={{ py: 3, fontSize:"1.5rem" }}>
      <ol>
        <li>क्रम संख्या 1 से 15 तक शीर्षकों के अंतर्गत तकनीकी आलेख ही चयनित किए जाएंगे ।</li>
        <li>उपरोक्त विषयों पर प्रचलित / लोकप्रिय विज्ञान आलेखों को शैक्षणिक एवं राजभाषा सत्र के लिए भेजा जा सकता है ।</li>
        <li>तकनीकी आलेख का शीर्षक उपरोक्त बिंदुओं के अंतर्गत ही होना चाहिए ।</li>
        <li>तकनीकी आलेख का प्रारूप शोध/अनुसंधान पत्र के अनुरूप लिखा जाए ।</li>
        <li>केवल चयनित आलेख संगोष्ठी कार्यवाही में शामिल किये जाएंगे।</li>
      </ol>
    </Typography>
  </Box>
</Box>
    </ThemeProvider>
  );
};

export default Invitation;
