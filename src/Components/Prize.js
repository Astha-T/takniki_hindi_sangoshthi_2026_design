import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Prize = () => {
  const theme = useTheme();

  const prizes = [
    { title: "प्रथम पुरस्कार", prize: "5100 रुपए" },
    { title: "द्वितीय पुरस्कार", prize: "3100 रुपए" },
    { title: "तृतीय पुरस्कार", prize: "2100 रुपए" },
    { title: "प्रोत्साहन पुरस्कार", prize: "1100 रुपए" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#5F695C",
        mt: 5,
        pb: 5,
        px: { xs: 2, sm: 3, md: 5 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          py: 3,
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          fontWeight: 700,
        }}
      >
        प्रत्येक सत्र के अंतर्गत प्रतिभागियों को कुल चार पुरस्कार
      </Typography>

      {prizes.map((item, i) => (
        <Box
          key={i}
          sx={{
            my: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Cream Box */}
          <Box
            sx={{
              backgroundColor: "#F9DAD0",
              width: { xs: "17rem", sm: "19rem", md: "24rem" }, // ✅ longer on large screens
              py: 2,
              borderRadius: "5rem",
              textAlign: "center",
              pr: { xs: "3rem", sm: "2rem", md: "5rem" },
              fontWeight: "bolder",
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
              zIndex: 1,
              position: "relative",
              mr: { xs: "-3rem", sm: "-4rem", md: "-5rem" },
            }}
          >
            {item.title}
          </Box>

          {/* Brown Box */}
          <Box
            sx={{
              backgroundColor: "#522B29",
              width: { xs: "12rem", sm: "13rem", md: "15rem" },
              py: 2,
              color: "#fff",
              borderRadius: "5rem",
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              position: "relative",
              zIndex: 2,
            }}
          >
            {item.prize}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Prize;
