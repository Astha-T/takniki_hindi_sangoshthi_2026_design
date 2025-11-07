import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import indorelogo_white from "../Assets/images/indorelogo_white.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        alignItems: { md: "center" },
        justifyContent: { md: "space-between" },
        textAlign: { xs: "center", md: "left" },
        width: "100%",
        background: theme.palette.primary.main,
        py: { xs: 3, md: 5 },
        px: { xs: 3, md: 10 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          mb: { xs: 2, md: 0 },
        }}
      >
        <img
          src={indorelogo_white}
          alt="IIT Indore Logo"
          style={{
            height: "110px", // ↓ scaled from 120px
            objectFit: "contain",
          }}
        />
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: { md: "1rem", lg: "1.25rem" },
            lineHeight: 1.3,
          }}
        >
          Indian Institute of Technology Indore
          <br />
          Simrol, Khandwa Road, Indore, Madhya Pradesh
          <br />
          India - 453552
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            lineHeight: 1.3,
            fontSize: { md: "1rem", lg: "1.25rem" },
            mt: 2,
          }}
        >
          भारतीय प्रौद्योगिकी संस्थान इंदौर <br />
          सिमरोल, खंडवा रोड, इंदौर, मध्य प्रदेश, भारत - 453552
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
