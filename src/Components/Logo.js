import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Logo = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: { xs: "50%", sm: "30%", md: "18%", lg: "12%" },
        height: "fit-content",
        backgroundColor: "#fff",
        borderBottomRightRadius: "7rem", // ↓ smaller
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ mt: 3, mb: 1 }}>
        {["2 तकनीकी", "0 हिंदी", "2 संगोष्ठी", "6"].map((text, index) => (
          <Typography
            key={index}
            sx={{
              color: "#1360AB",
              fontWeight: 700,
              fontSize: { md: "1rem", lg: "1.25rem" },
              lineHeight: 1,
              my: 0,
            }}
          >
            {text.split("").map((char, i) =>
              /[0-9]/.test(char) ? (
                <Box
                  key={i}
                  component="span"
                  sx={{
                    fontWeight: 800,
                    fontSize: { md: "1.25rem", lg: "1.5rem" },
                  }}
                >
                  {char}
                </Box>
              ) : (
                char
              )
            )}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Logo;
