import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import backgroundImage from "../Assets/Images/backgroundImage.png";
import logo from "../Assets/Images/logo.png";

const IntroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", sm: "70vh", md: "85vh", lg: "88vh" },
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={backgroundImage}
        alt="Background"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(60%)",
        }}
      />

      {/* Curved white logo section */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "100%", sm: "75%", md: "55%", lg: "45%" },
          height: "auto",
          backgroundColor: "#fff",
          borderBottomLeftRadius: "50% 100%",
          borderBottomRightRadius: "50% 100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          zIndex: 3,
          py: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: { xs: "5rem", sm: "6rem", md: "7rem", lg: "8rem" },
            height: "auto",
          }}
        />
      </Box>

      {/* Title (centered vertically in middle) */}
      <Typography
        color="#fff"
        sx={{
          position: "absolute",
          top: "50%", // center vertically
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "3rem", sm: "5rem", md: "8rem", lg: "9rem" },
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          whiteSpace: "nowrap",
          zIndex: 4,
        }}
      >
        अभ्युदय 3
      </Typography>

      {/* Green info box */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "8%", sm: "10%", md: "12%" },
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: theme.palette.success.main,
          width: { xs: "80%", sm: "60%", md: "40%", lg: "35%" },
          py: { xs: 1, sm: 1.5, md: 2 },
          borderRadius: "30px",
          textAlign: "center",
          zIndex: 4,
        }}
      >
        <Typography
          color="#fff"
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1.1rem",
              md: "1.3rem",
              lg: "1.5rem",
            },
            fontWeight: "bold",
            mb: 0.5,
          }}
        >
          5-6 जनवरी 2026
        </Typography>
        <Typography
          color="#fff"
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1.1rem",
              md: "1.3rem",
              lg: "1.5rem",
            },
            fontWeight: "bold",
          }}
        >
          स्थान - भारतीय प्रौद्योगिकी संस्थान इंदौर
        </Typography>
      </Box>
    </Box>
  );
};

export default IntroSection;
