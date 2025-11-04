import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  useTheme,
  ThemeProvider,
} from "@mui/material";
import backgroundimg from "../Assets/images/backgroundimg.png";
import indorelogo from "../Assets/images/indorelogo.png";
import jodhpurlogo from "../Assets/images/jodhpurlogo.png";
import Hindi_confrenece_video from '../Assets/images/Hindi_confrenece_video.gif'

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
   
   <Box sx={{background:'#fff'}}>
      <Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // optional fallback
    py: 5,
  }}
>
  <img
    src={Hindi_confrenece_video}
    alt="Hindi Conference Video"
    style={{
      width: "100%",
      maxWidth: "1500px",
      borderRadius: "12px",
      objectFit: "cover",
    }}
  />
</Box>


      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          py: { xs: 5, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "80%" }, mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bolder",
              textAlign: "left",
              mb: 4,
            }}
          >
            संगोष्ठी का विवरण
          </Typography>
         <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
  
              <Typography variant="h6" sx={{ textAlign: "justify", color: "#000", pr: 5 }}>
                भारतीय प्रौद्योगिकी संस्थान इंदौर द्वारा गत वर्ष की भांति इस वर्ष भी तकनीकी
                हिंदी संगोष्ठी का आयोजन 02 जनवरी 2026 को किया जा रहा है। संगोष्ठी का मुख्य उद्देश्य
                वैज्ञानिक एवं प्रौद्योगिकी संस्थानों में हो रहे तकनीकी नवाचारों को हिंदी भाषा में
                सरल एवं रुचिकर पाठ्य के माध्यम से छात्रों एवं शोधार्थियों के लिए उपलब्ध कराया जाना है।
              </Typography>
  
              <Typography variant="h6" sx={{ textAlign: "justify", color: "#000", pl: 5 }}>
                जिससे तकनीकी क्षेत्र में हिंदी भाषा के प्रयोग का दायरा विस्तृत किया जा सके।
                इस वर्ष की तकनीकी हिंदी संगोष्ठी का संयुक्त आयोजन भारतीय प्रौद्योगिकी संस्थान
                इंदौर और भारतीय प्रौद्योगिकी संस्थान जोधपुर द्वारा किया जा रहा है।
              </Typography>
      </Box>
        </Box>
      </Box>

      {/* ---------- Green background image section ---------- */}
      <Box
        sx={{
          width: "100%",
          py: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ✅ Centered green box */}
        <Box
          sx={{
            width: { xs: "85%", md: "30%" },
            backgroundColor: theme.palette.success.main,
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            gap: 3,
          }}
        >
          <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 2, md: 4 },
    flexDirection: { xs: "column", md: "row" }, // ✅ vertical on mobile, horizontal on desktop
    textAlign: "center",
  }}
>
  <img
    src={indorelogo}
    alt="IIT Indore Logo"
    style={{
      height: "9rem",
      objectFit: "contain",
    }}
  />

  <Typography
    color="#fff"
    sx={{
      fontWeight: "bold",
      fontSize: { xs: "1.75rem", md: "2.25rem" }, // ✅ adjusts size for mobile
    }}
  >
    एवं
  </Typography>

  <img
    src={jodhpurlogo}
    alt="IIT Jodhpur Logo"
    style={{
      height: "9rem",
      objectFit: "contain",
    }}
  />
</Box>

          <Typography
            color="#fff"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "3rem" },
            }}
          >
            द्वारा संयुक्त आयोजन
          </Typography>
          <Typography
            color="#fff"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            2 जनवरी 2026 | स्थान - भारतीय प्रौद्योगिकी संस्थान इंदौर
          </Typography>
        </Box>
      </Box>

      {/* ---------- Registration button (text visible) ---------- */}
      <Box
        sx={{
          width: "100%",
          background: "#fff",
          my: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={()=>navigate("./register")}
          sx={{
            color: "#fff",
            backgroundColor: "#522B29",
            width: { xs: "70%", md: "25%" },
            height: { xs: "5rem", md: "10rem" },
            fontSize: { xs: "1,5rem", md: "2.5rem" }, // ✅ readable
            fontWeight: "bolder",
            borderRadius: "80px",
            "&:hover": {
              backgroundColor: "#6d3c37",
            },
          }}
        >
          पंजीकरण करें
        </Button>
      </Box>

      {/* ---------- Committee Section (6 per row) ---------- */}
      <Divider
        sx={{
          my: 6,
          borderColor: "#F9DAD0",
          borderWidth: 2,
          width: "80%",
          mx: "auto",
        }}
      />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          my: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "80%" } }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bolder",
              textAlign: "left",
              mb: 4,
            }}
          >
            संगोष्ठी आयोजन एवं मूल्यांकन समिति के सदस्य
          </Typography>
        </Box>

        <Grid
          container
          spacing={5}
          justifyContent="center"
          sx={{
            width: "85%",
            mx: "auto",
            textAlign: "center",
          }}
        >
          {[...Array(12)].map((_, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Box
                sx={{
                  background: "#D9D9D9",
                  width: "14.6rem",
                  height: "13.8rem",
                  borderRadius: "8px",
                  mx: "auto",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  my: 2,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                प्रो. श्री प्रकाश तिवारी
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ---------- Green bottom section (center aligned) ---------- */}
<Box
  sx={{
    width: "100%",
    mt: 5,
    px: { xs: 2, md: 5 },
    py: { xs: 4, md: 8 },
    backgroundColor: theme.palette.success.main,
    display: "flex",
    justifyContent: "center",
  }}
>
  <Grid
    container
    spacing={0}
    alignItems="stretch"
    justifyContent="center"
    sx={{
      width: "100%",
      maxWidth: "1400px",
      textAlign: "center",
    }}
  >
    {[
      { title: "आयोजक" },
      { title: "सह-आयोजक" },
      { title: "प्रलेख, सुप्रचालन एवं प्रलेख उप-समिति के सदस्य" },
    ].map((item, index) => (
      <Grid
        item
        xs={12}
        md={4}
        key={index}
        sx={{
          borderRight: index !== 2 ? "2px solid #F9DAD0" : "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            mb: 4,
            lineHeight: 1.4,
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          {index === 2
            ? "प्रलेख, सुप्रचालन एवं\nप्रलेख उप-समिति के सदस्य"
            : item.title}
        </Typography>

        {/* ✅ This ensures all member lists start at same Y position */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "100%",
            pb: { xs: 3, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                lineHeight: 2,
                textAlign: "center",
              }}
            >
              प्रो. श्री प्रकाश तिवारी<br />
              प्रो. श्री प्रकाश तिवारी<br />
              प्रो. श्री प्रकाश तिवारी
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                lineHeight: 2,
                textAlign: "center",
              }}
            >
              प्रो. श्री प्रकाश तिवारी<br />
              प्रो. श्री प्रकाश तिवारी<br />
              प्रो. श्री प्रकाश तिवारी
            </Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>


</Box>
    </ThemeProvider>
  );
};

export default Home;
